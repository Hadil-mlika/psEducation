import { Component, OnInit } from '@angular/core';
declare const myTest :any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onClick(){
    myTest();
  
}
}
