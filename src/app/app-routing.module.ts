import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CompromisoComponent } from './components/compromiso/compromiso.component';
import { ReservasPresupuestalesComponent } from './components/reservas-presupuestales/reservas-presupuestales.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'compromiso', component: CompromisoComponent },
  { path: 'reserva', component: ReservasPresupuestalesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
