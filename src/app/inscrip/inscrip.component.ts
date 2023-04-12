import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inscrip',
  templateUrl: './inscrip.component.html',
  styleUrls: ['./inscrip.component.css']
})
export class InscripComponent implements OnInit {

  constructor( private route:Router) { }

  ngOnInit(): void {
  }
  goToPostinscri(){
    this.route.navigate(["/postinscri"])
  }

}
