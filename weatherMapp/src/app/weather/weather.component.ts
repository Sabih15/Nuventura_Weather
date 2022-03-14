import { Component, OnInit, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Weather } from './weather.model';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  
  img: string = '';

  constructor(@Inject(MAT_DIALOG_DATA) public data: Weather, private dialogRef: MatDialogRef<WeatherComponent>) { }

  ngOnInit(): void {
    this.img = this.imageurl[this.data.iconDescription];
  }

  imageurl: {[key: string]: string} = {
    "clear sky":"../../../assets/weatherImages/clearsky.png",
    "few clouds":"../../../assets/weatherImages/cloudy.png",
    "scattered clouds":"../../../assets/weatherImages/cloudy.png",
    "broken clouds":"../../../assets/weatherImages/cloudy.png",
    "shower rain":"../../../assets/weatherImages/rainshower.png",
    "rain":"../../../assets/weatherImages/rain.png",
    "thunderstorm":"../../../assets/weatherImages/thunderstorm.png",
    "snow":"../../../assets/weatherImages/snow.png",
    "mist":"../../../assets/weatherImages/mist.png",
    "haze":"../../../assets/weatherImages/mist.png",
  }

  close() {
    this.dialogRef.close();
  }

}
