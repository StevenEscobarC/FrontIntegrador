import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CierrePresupuestalComponent } from './components/cierre-presupuestal/cierre-presupuestal.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cierre', component: CierrePresupuestalComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
