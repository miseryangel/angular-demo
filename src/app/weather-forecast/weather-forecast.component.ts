import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { Forecast } from '../shared/forecast';

@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.css']
})
export class WeatherForecastComponent implements OnInit {

  day = true;
  weeklyForecast!: Forecast[] | undefined;
  constructor(public dialogRef: MatDialogRef<WeatherForecastComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {weatherData: Forecast[]}) {
      this.weeklyForecast = data.weatherData;
      console.log(data.weatherData);
     }

  ngOnInit(): void {

  }

  onClose(): void{
    console.log(this.data.weatherData);
    this.dialogRef.close();
  }

  getDate(x: number):Date{
    const time = new Date();
    time.setDate(time.getDate() + x);
    return time;
  }

  public toggle(event: MatSlideToggleChange) {
    this.day = !this.day;
}

}
