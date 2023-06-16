import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
<<<<<<< HEAD
import { ReservasPresupuestalesComponent } from './components/reservas-presupuestales/reservas-presupuestales.component';
=======
import { CompromisoComponent } from './components/compromiso/compromiso.component';
>>>>>>> 32c30f5c1d7335a4bf447ab9c43dd0f703c7cd58

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    ReservasPresupuestalesComponent,
    CompromisoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
