import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLogoutEnable=true;
  isLoginEnable=false;

  constructor() { }
  

  ngOnInit() {
  }

  callLogout(){
    this.isLogoutEnable=!this.isLogoutEnable;
    this.isLoginEnable=!this.isLoginEnable;
  }

  callLogin(){
    this.isLogoutEnable=!this.isLogoutEnable;
    this.isLoginEnable=!this.isLoginEnable;
  }

}
