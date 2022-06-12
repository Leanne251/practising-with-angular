import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { MyActivitiesComponent } from './my-activities/my-activities.component';
import { HomeComponent } from './home/home.component';
import { Assignment2Component } from './assignment2/assignment2.component';
import { PractiseFeatureComponent } from './practise-feature/practise-feature.component';
import { SimpleFeaturesComponent } from './simple-features/simple-features.component';
import { Assignment3Component } from './assignment3/assignment3.component';
import { Assignment4Component } from './assignment4/assignment4.component';
import { GameComponentsComponent } from './Assignment4/game-components/game-components.component';
import { OddComponent } from './Assignment4/odd/odd.component';
import { EvenComponent } from './Assignment4/even/even.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MyActivitiesComponent,
    HomeComponent,
    Assignment2Component,
    PractiseFeatureComponent,
    SimpleFeaturesComponent,
    Assignment3Component,
    Assignment4Component,
    GameComponentsComponent,
    OddComponent,
    EvenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
