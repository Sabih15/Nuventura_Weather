import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { WeatherComponent } from './weather/weather.component';
import { Weather } from './weather/weather.model';
import { WeatherService } from './weather/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  locationForm: FormGroup
  data: Weather = new Weather();

  constructor(private formBuilder: FormBuilder, private weatherService: WeatherService, private dialog: MatDialog) {
    this.locationForm = this.formBuilder.group({
      lat: ['', Validators.required],
      long: ['', Validators.required]
    });
   }

   submit() {
     this.weatherService.getData(this.locationForm.controls.lat.value,this.locationForm.controls.long.value)
      .subscribe((res: any) => {
        this.data.name = res.name? res.name : 'Unknown Location';
        this.data.temprature = res.main.temp;
        this.data.humidity = res.main.humidity;
        this.data.icon = res.weather[0].icon;
        this.data.iconDescription = res.weather[0].description;
        this.data.feelslike = res.main.feels_like;
        this.data.mintemp = res.main.temp_min;
        this.data.maxtemp = res.main.temp_max;
        this.data.windspeed = res.wind.speed;
        this.openDialog();
      },
      (ex: any) => {
        alert(ex.error.message);
      })
   }

   openDialog() {
    let dialogRef = this.dialog.open(WeatherComponent, {
      data: this.data,
      width: '500px',
      height: '500px'
    });
   }
}
