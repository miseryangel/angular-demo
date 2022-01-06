import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { weatherUrl, weatherKey, locationUrl, forecastUrl } from '../shared/accu';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Weather } from '../shared/weather';
import { ForecastData } from '../shared/forecast';
import { LocationInfo } from '../shared/locationInfo';

@Injectable({
  providedIn: 'root'
})
export class AccuweatherService {

  constructor(private http: HttpClient){ }

  getLocation(position:{
    latitude: number,
    longitude: number
  }):Observable<LocationInfo>{
    return this.http.get<LocationInfo>(locationUrl +  weatherKey +
                    "&q=" + position.latitude + "%2C" + position.longitude)
                    .pipe(catchError(error => {throw new Error(error)}));

  }

  getWeather(locationKey: string):Observable<Weather>{
    return this.http.get<Weather[]>(weatherUrl  + locationKey + weatherKey)
                    .pipe(map(weather => weather[0]))
                    .pipe(catchError(error => {throw new Error(error)}));
  }

  getForecast(locationKey: string):Observable<ForecastData>{
    return this.http.get<ForecastData>(forecastUrl  + locationKey + weatherKey)
                    .pipe(catchError(error => {throw new Error(error)}));
  }
}
