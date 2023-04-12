import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AllemagneComponent } from './allemagne/allemagne.component';
import { BarceloneComponent } from './barcelone/barcelone.component';
import { CanadaComponent } from './canada/canada.component';
import { ContactComponent } from './contact/contact.component';
import { FranceComponent } from './france/france.component';
import { InscripComponent } from './inscrip/inscrip.component';
import { LoginComponent } from './login/login.component';
import { LondonComponent } from './london/london.component';
import { PartenairesComponent } from './partenaires/partenaires.component';
import { PostinscriComponent } from './postinscri/postinscri.component';
import { ServicesComponent } from './services/services.component';
import { TurkiyaComponent } from './turkiya/turkiya.component';

const routes: Routes = [

{path :"accueil" , component:AccueilComponent},
{path :"postinscri" , component:PostinscriComponent},
{path :"inscri" , component:InscripComponent},
{path :"services" , component:ServicesComponent},
{path :"partenaires" , component:PartenairesComponent},
{path :"contact" , component:ContactComponent} ,
{path :"login" , component:LoginComponent} ,
{path :"canada" , component:CanadaComponent},
{path :"allemagne" , component:AllemagneComponent},
{path :"turkiya" , component:TurkiyaComponent},
{path :"barcelone" , component:BarceloneComponent},
{path :"london" , component:LondonComponent},
{path :"france" , component:FranceComponent} ,

{path:"**",component:AccueilComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
