import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  key: string = 'ac1bf49b71412a6fe787b30353b62b24'
  constructor(private http: HttpClient) { }

  getData(lat: number, long: number) {
    return this.http.get('http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+long+'&appid='+this.key+'&units=metric')
  }
}
