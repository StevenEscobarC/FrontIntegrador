import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CompromisoComponent } from './components/compromiso/compromiso.component';
import { ReservasPresupuestalesComponent } from './components/reservas-presupuestales/reservas-presupuestales.component';
import { CierrePresupuestalComponent } from './components/cierre-presupuestal/cierre-presupuestal.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'compromiso', component: CompromisoComponent },
  { path: 'reserva', component: ReservasPresupuestalesComponent },
  { path: 'cierre', component: CierrePresupuestalComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
