import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
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
import { GameComponentsComponent } from "./assignment4/game-components/game-components.component"
import { OddComponent } from './assignment4/odd/odd.component';
import { EvenComponent } from './assignment4/even/even.component';
import { ShuffleComponent } from './shuffle/shuffle.component';
import {ListOfInterestsComponent} from "./list-of-interests/list-of-interests.component";
import { LoopedInterestsComponent } from './list-of-interests/looped-interests/looped-interests.component';
import { InterestDetailsComponent } from './list-of-interests/interest-details/interest-details.component';
import { SavedActivitiesComponent } from './list-of-interests/interest-details/saved-activities/saved-activities.component';
import { UnlessDirective } from './unless.directive';
import { AnimalsComponent } from './animals/animals.component';
import { SharkDirective } from './shark.directive';
import { ServicesComponent } from './assignment5/services/services.component';
import { ActiveUsersComponent } from './assignment5/active-users/active-users.component';
import { InactiveUsersComponent } from './assignment5/inactive-users/inactive-users.component';
import { RoutingAndServicesComponent } from './routing-and-services/routing-and-services.component';
import { RoutesComponent } from './routing-and-services/routes/routes.component';
import { SingleRouteComponent } from './routing-and-services/routes/single-route/single-route.component';
import { User2Component } from './routing-and-services/routes/user2/user2.component';
import { User3Component } from './routing-and-services/routes/user3/user3.component';
import { RouteItemComponent } from './routing-and-services/routes/route-item/route-item.component';

import { MakeUpComponent } from './make-up/make-up.component'
import { ReactiveFormsModule } from '@angular/forms';
import { FullStackPractiseComponent } from './full-stack-practise/full-stack-practise.component';
import { AddAnItemComponent } from './full-stack-practise/add-an-item/add-an-item.component';
import { AllItemsComponent } from './full-stack-practise/all-items/all-items.component';
import { EditItemComponent } from './full-stack-practise/edit-item/edit-item.component';





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
    EvenComponent,
    ListOfInterestsComponent,
    LoopedInterestsComponent,
    InterestDetailsComponent,
    SavedActivitiesComponent,
    ShuffleComponent,
    UnlessDirective,
    AnimalsComponent,
    SharkDirective,
    ServicesComponent,
    ActiveUsersComponent,
    InactiveUsersComponent,
    RoutingAndServicesComponent,
    RoutesComponent,
    SingleRouteComponent,
    User2Component,
    User3Component,
    RouteItemComponent,

    MakeUpComponent,
     FullStackPractiseComponent,
     AddAnItemComponent,
     AllItemsComponent,
     EditItemComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
