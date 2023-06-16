import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CompromisoComponent } from './components/compromiso/compromiso.component';
import { ReservasPresupuestalesComponent } from './components/reservas-presupuestales/reservas-presupuestales.component';
import { ApropiacionComponent } from './components/apropiacion/apropiacion.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'compromiso', component: CompromisoComponent },
  { path: 'reserva', component: ReservasPresupuestalesComponent },
  { path: 'apropiacion', component: ApropiacionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
