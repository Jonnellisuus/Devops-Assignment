import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CalculatorComponent} from './calculator/calculator.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {CinemaComponent} from './cinema/cinema.component';
import {ForexComponent} from './forex/forex.component';

const routes: Routes = [
  {path: '', redirectTo: '/calculator', pathMatch: 'full'},
  {path: 'calculator', component: CalculatorComponent},
  {path: 'cinema', component: CinemaComponent},
  {path: 'forex', component: ForexComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
