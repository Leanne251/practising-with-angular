import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimalsComponent } from './animals/animals.component';
import { RoutesComponent } from './routing-and-services/routes/routes.component';
import { SingleRouteComponent } from './routing-and-services/routes/single-route/single-route.component';

const routes: Routes = [
  {path: 'routes', component: RoutesComponent},
  {path: 'routes/:id/:name', component: SingleRouteComponent},
  {path: 'animals', component: AnimalsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
