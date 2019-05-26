import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  durationInSeconds = 5;
  public VegetableList = [
    { "name": "Carrot",
      "price": 2,
      "imageUrl": "https://previews.123rf.com/images/monticello/monticello1406/monticello140600075/28992146-wire-shopping-basket-with-groceries-isolated-on-white-background.jpg"  
      },
      { "name": "Organic Tomatos",
      "price": 10,
      "imageUrl": "https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX1721973.jpg"  
      },
      { "name": "Potato",
      "price": 3,
      "imageUrl": "http://res.freestockphotos.biz/pictures/6/6125-three-peppers-isolated-on-a-white-background-pv.jpg"  
      },
      { "name": "Potato",
      "price": 3,
      "imageUrl": "https://image.freepik.com/free-photo/green-vegetables-white-background_1203-1898.jpg"  
      },
      { "name": "Potato",
      "price": 3,
      "imageUrl": "https://image.freepik.com/free-photo/chinese-kale-vegetable-isolated-white-background_1205-511.jpg?1"  
      }  ,
      { "name": "Potato",
      "price": 3,
      "imageUrl": "https://st2.depositphotos.com/4166227/7174/i/950/depositphotos_71749353-stock-photo-fresh-vegetables-and-fruit-in.jpg"  
      }  ,
      { "name": "Potato",
      "price": 3,
      "imageUrl": "https://previews.123rf.com/images/monticello/monticello1406/monticello140600075/28992146-wire-shopping-basket-with-groceries-isolated-on-white-background.jpg"  
      }  ,
      { "name": "Potato",
      "price": 3,
      "imageUrl": "https://image.shutterstock.com/image-photo/beetroots-isolated-on-white-background-260nw-599136803.jpg"  
      }  ,
      { "name": "Potato",
      "price": 3,
      "imageUrl": "https://previews.123rf.com/images/monticello/monticello1406/monticello140600075/28992146-wire-shopping-basket-with-groceries-isolated-on-white-background.jpg"  
      }  ,
      { "name": "Potato",
      "price": 3,
      "imageUrl": "https://previews.123rf.com/images/monticello/monticello1406/monticello140600075/28992146-wire-shopping-basket-with-groceries-isolated-on-white-background.jpg"  
      }  ,
      { "name": "Potato",
      "price": 3,
      "imageUrl": "https://previews.123rf.com/images/monticello/monticello1406/monticello140600075/28992146-wire-shopping-basket-with-groceries-isolated-on-white-background.jpg"  
      }      
  ];

  constructor(private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 4000,
    });
  }
}
