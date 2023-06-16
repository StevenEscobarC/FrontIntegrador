import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CierrePresupuestalComponent } from './components/cierre-presupuestal/cierre-presupuestal.component';
import { ReservasPresupuestalesComponent } from './components/reservas-presupuestales/reservas-presupuestales.component';
import { CompromisoComponent } from './components/compromiso/compromiso.component';
import { ApropiacionComponent } from './components/apropiacion/apropiacion.component';
import { ReservasCuentasComponent } from './components/reservas-cuentas/reservas-cuentas.component';
import { CuentasPresupuestoComponent } from './components/cuentas-presupuesto/cuentas-presupuesto.component';
import { CuentasContabilidadComponent } from './components/cuentas-contabilidad/cuentas-contabilidad.component';

import { RevisorComponent } from './components/compromiso/revisor/revisor.component';
import { DisponibilidadComponent } from './components/disponibilidad/disponibilidad.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogComponent } from './components/dialog/dialog.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    CierrePresupuestalComponent,
    ReservasPresupuestalesComponent,
    CompromisoComponent,
    ApropiacionComponent,
    ReservasCuentasComponent,
    CuentasPresupuestoComponent,
    CuentasContabilidadComponent,
    RevisorComponent,
    DisponibilidadComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
