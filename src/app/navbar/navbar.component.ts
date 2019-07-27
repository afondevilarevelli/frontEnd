import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  private photoUrl : string = "https://mdbootstrap.com/img/Photos/Avatars/avatar-5.jpg";
  constructor() { }

  ngOnInit() {
  }

}
