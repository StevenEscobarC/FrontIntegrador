import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
<<<<<<< HEAD
import { ReservasPresupuestalesComponent } from './components/reservas-presupuestales/reservas-presupuestales.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'reserva', component: ReservasPresupuestalesComponent },
=======
import { CompromisoComponent } from './components/compromiso/compromiso.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'compromiso', component: CompromisoComponent },
>>>>>>> 32c30f5c1d7335a4bf447ab9c43dd0f703c7cd58
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
