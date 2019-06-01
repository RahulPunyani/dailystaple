import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.css']
})
export class FruitsComponent implements OnInit {

  public fruitsList = [];

  constructor(public snackBar:MatSnackBar,private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProducts().subscribe(p => { this.fruitsList = p.filter(item => item.Category == 2);});
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 4000,
    });
  }


}
