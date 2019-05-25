import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {MatButtonModule, MatCheckboxModule , MatMenuModule, MatSidenavModule, MatSelectModule, MatBadgeModule, MatCardModule} from '@angular/material';
import { VegetablesComponent } from './vegetables/vegetables.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VegetablesComponent
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
    MatCardModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
