import { Component } from '@angular/core';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dailystaple';
  constructor(private product:ProductService){
    this.GetCityList();
  }
  cityList:any =[];
  GetCityList()
  {
    this.product.GetCityList().subscribe(data => this.cityList = data);
  }
}
