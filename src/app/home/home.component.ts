import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  durationInSeconds = 5; 
  productList:any = [];
  VegetableList :any = [];
  fruitList:any = [];
  constructor(private snackBar: MatSnackBar, private productservice:ProductService) { }

  ngOnInit() {
    this.getproducts();
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 4000,
    });
  }

  getproducts()
  {
    this.productservice.getProducts().subscribe(data =>
      { 
        this.VegetableList = data.filter(item => item.Category == 1);
        this.fruitList = data.filter(item => item.Category == 2);
      });    
    

  }
}
