import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';


import { HttpClientModule } from '@angular/common/http';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {MatSnackBarModule, MatButtonModule, MatCheckboxModule , MatMenuModule, MatSidenavModule, MatSelectModule, MatBadgeModule, MatCardModule, MatChipsModule} from '@angular/material';
import { VegetablesComponent } from './vegetables/vegetables.component';
import { FruitsComponent } from './fruits/fruits.component';
import { PersonalcareComponent } from './personalcare/personalcare.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { GroceriesComponent } from './groceries/groceries.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VegetablesComponent,
    FruitsComponent,
    PersonalcareComponent,
    GroceriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatMenuModule,
    MatSidenavModule,
    MatSelectModule,
    MatBadgeModule,
    MatCardModule,
    MatChipsModule,
    MatSnackBarModule,    
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireDatabaseModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
