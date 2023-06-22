import { Component } from '@angular/core';
import { LocalStorageService } from '../local-storage.service';
import { Router } from '@angular/router';
import { SessionStorageService } from '../session-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  email: string = "";
  password: string = "";


  constructor(private localStorageService: LocalStorageService,private router:Router,private sessionStorageService:SessionStorageService) {

  }

  login(){
      if(this.email==this.localStorageService.getData("email") && this.password==this.localStorageService.getData("password")){
        this.localStorageService.saveData("isLoggedIn","true");
        alert("Successfully Login")
        this.router.navigate(['profile'])

      }else{
        this.localStorageService.saveData("isLoggedIn","false");
        alert("Invalid email or password........please try again")
      }
  }

}
