import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AccuweatherService } from '../services/accuweather.service';
import { Weather } from '../shared/weather';
import { Forecast, ForecastData } from '../shared/forecast';
import { MatDialog } from '@angular/material/dialog';
import { GeolocationService } from '@ng-web-apis/geolocation';
import { take } from 'rxjs/operators';

import { WeatherForecastComponent } from '../weather-forecast/weather-forecast.component';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  position!: {
    latitude: number,
    longitude: number
  } | undefined;
  locationKey!: string | undefined;
  cityName!: string | undefined;
  localWeather!: Weather | undefined;
  weeklyForecast!: Forecast[] | undefined;

  constructor(
              private weatherService: AccuweatherService,
              private readonly geolocation: GeolocationService,
              public dialog: MatDialog) { 

              }

  ngOnInit(): void {
    this.geolocation.pipe(take(1)).subscribe(position => {
      this.position = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      }

      this.weatherService.getLocation(this.position)
          .subscribe((location) =>{
            this.locationKey = location.Key;
            this.cityName = location.EnglishName;
            this.weatherService.getWeather(this.locationKey)
                  .subscribe((weather) => {
                    this.localWeather = weather;
                  });
            
            this.weatherService.getForecast(this.locationKey)
                  .subscribe((forecast) =>{
                    this.weeklyForecast = forecast.DailyForecasts;
                    console.log(forecast);
                    console.log(this.weeklyForecast);
                  })
          })
    });
  }

  openForecast(): void{
    const forecastRef = this.dialog.open(WeatherForecastComponent,{
      width: '1000px',
      height: '270px',
      data: {weatherData: this.weeklyForecast},
      disableClose: true,
      autoFocus: true,
      panelClass: 'my-dialog',
    });

    // redundant but I can open multiple dialogs at the same time
    forecastRef.afterClosed();
  }

}
