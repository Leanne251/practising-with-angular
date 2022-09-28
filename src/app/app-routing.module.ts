import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimalsComponent } from './animals/animals.component';
import { FullStackPractiseComponent } from './full-stack-practise/full-stack-practise.component';
import { MakeUpComponent } from './make-up/make-up.component';
import { RoutesComponent } from './routing-and-services/routes/routes.component';
import { SingleRouteComponent } from './routing-and-services/routes/single-route/single-route.component';
import { User2Component } from './routing-and-services/routes/user2/user2.component';
import { User3Component } from './routing-and-services/routes/user3/user3.component';

const routes: Routes = [
  {
    path: 'routes',
    component: RoutesComponent,
    children: [
      { path: 'user2', component: User2Component },
      { path: 'user3', component: User3Component },
      { path: ':id/:name', component: SingleRouteComponent },
    ],
  },
  { path: 'animals', component: AnimalsComponent },
  { path: 'make-up', component: MakeUpComponent },
  { path: 'full-stack', component: FullStackPractiseComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
