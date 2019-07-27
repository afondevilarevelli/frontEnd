import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private username : string = "";
  private password : string = "";

  constructor() { }

  ngOnInit() {
    $(".card").hide().fadeIn(2000);
  }

  verifyUser(){
    alert("Usuario: " + this.username + "\nContraseña: " + this.password);
  }
}
