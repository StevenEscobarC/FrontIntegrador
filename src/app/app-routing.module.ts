import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CompromisoComponent } from './components/compromiso/compromiso.component';
import { ReservasPresupuestalesComponent } from './components/reservas-presupuestales/reservas-presupuestales.component';
import { CierrePresupuestalComponent } from './components/cierre-presupuestal/cierre-presupuestal.component';
import { ApropiacionComponent } from './components/apropiacion/apropiacion.component';
import { ReservasCuentasComponent } from './components/reservas-cuentas/reservas-cuentas.component';
import { CuentasPresupuestoComponent } from './components/cuentas-presupuesto/cuentas-presupuesto.component';
import { CuentasContabilidadComponent } from './components/cuentas-contabilidad/cuentas-contabilidad.component';
import { RevisorComponent } from './components/compromiso/revisor/revisor.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'compromiso', component: CompromisoComponent },
  { path: 'reserva', component: ReservasPresupuestalesComponent },
  { path: 'cierre', component: CierrePresupuestalComponent },
  { path: 'apropiacion', component: ApropiacionComponent },
  { path: 'reservas-cuentas', component: ReservasCuentasComponent },
  { path: 'cuentas-presupuesto', component: CuentasPresupuestoComponent },
  { path: 'cuentas-contabilidad', component: CuentasContabilidadComponent },
  { path: 'revision', component: RevisorComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
