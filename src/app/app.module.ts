import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { InscripComponent } from './inscrip/inscrip.component';
import { ServicesComponent } from './services/services.component';
import { PartenairesComponent } from './partenaires/partenaires.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule } from '@angular/forms';
import { CarouselComponent } from './carousel/carousel.component';
import { PostinscriComponent } from './postinscri/postinscri.component';
import { LoginComponent } from './login/login.component';
import { FranceComponent } from './france/france.component';
import { CanadaComponent } from './canada/canada.component';
import { AllemagneComponent } from './allemagne/allemagne.component';
import { BarceloneComponent } from './barcelone/barcelone.component';
import { TurkiyaComponent } from './turkiya/turkiya.component';
import { LondonComponent } from './london/london.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    InscripComponent,
    ServicesComponent,
    PartenairesComponent,
    ContactComponent,
    CarouselComponent,
    PostinscriComponent,
    LoginComponent,
    FranceComponent,
    CanadaComponent,
    AllemagneComponent,
    BarceloneComponent,
    TurkiyaComponent,
    LondonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
