import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-vegetables',
  templateUrl: './vegetables.component.html',
  styleUrls: ['./vegetables.component.css']
})
export class VegetablesComponent implements OnInit {

  public VegetableList: any = [];

  constructor(public snackBar:MatSnackBar, private productService: ProductService) { }

  ngOnInit() {    
    this.productService.getProducts().subscribe(p => { this.VegetableList = p.filter(item => item.Category == 1);});    
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 4000,
    });
  }


}
