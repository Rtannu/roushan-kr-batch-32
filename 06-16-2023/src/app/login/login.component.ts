import { Component } from '@angular/core';
import { LocalStorageService } from '../local-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  email: string = "";
  password: string = "";


  constructor(private localStorageService: LocalStorageService,private router:Router) {

  }

  login(){
      if(this.email==this.localStorageService.getData("email") && this.password==this.localStorageService.getData("password")){
        alert("Successfully Login")
        this.router.navigateByUrl('profile')

      }else{
        alert("Invalid email or password........please try again")
      }
  }

}
