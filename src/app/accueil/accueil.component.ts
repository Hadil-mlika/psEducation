import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  constructor(private route2 : Router,
    private route3 : Router,
    private route6 : Router,
    private route7 : Router,
    private route8 : Router,
    private route9 : Router,
    private route10 : Router,
    private route11 : Router,
    private route12 : Router,
    private route4 : Router, private route1 : Router,
    private route5 : Router) { }

  ngOnInit(): void {
  }
  goToLogin(){
    this.route8.navigate(["/login"])
  }
  goToCanada(){
    this.route6.navigate(["/canada"])
  }
  goToFrance(){
    this.route7.navigate(["/france"])
  }
  goToLondon(){
    this.route9.navigate(["/london"])
  }
  goToAllemagne(){
    this.route10.navigate(["/allemagne"])
  }
  goToBarcelone(){
    this.route11.navigate(["/barcelone"])
  }
  goToTurkey(){
    this.route12.navigate(["/turkiya"])
  }
 
   
  goToInscrip(){
    this.route2.navigate(["/inscri"])
  }
  goToServices(){
    this.route3.navigate(["/services"])
  }
  goToPartenaires(){
    this.route4.navigate(["/partenaires"])
  }
  goToAccueil(){
    this.route1.navigate(["/accueil"])
  }
  goToContact(){
    this.route5.navigate(["/contact"])
  }
}
