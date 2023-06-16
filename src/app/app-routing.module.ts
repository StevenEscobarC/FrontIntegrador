import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DisponibilidadComponent } from './components/disponibilidad/disponibilidad.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'disponibilidad', component: DisponibilidadComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
