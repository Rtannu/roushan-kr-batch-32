import { Component } from '@angular/core';
import { LocalStorageService } from '../local-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.css']
})
export class SingUpComponent {

  firstName: string = "";
  lastName: string = "";
  phone: string = "";
  email: string = "";
  dob: string = "";
  gender: string = "";
  password: string = "";
  confirmPassword: string = "";



  constructor(private localStorageService: LocalStorageService, private router: Router) {

  }

  singUp() {
    this.localStorageService.saveData("firstName", this.firstName);
    this.localStorageService.saveData("lastName", this.lastName);
    this.localStorageService.saveData("phone", this.phone);
    this.localStorageService.saveData("email", this.email);
    this.localStorageService.saveData("dob", this.dob);
    this.localStorageService.saveData("gender", this.gender);
    this.localStorageService.saveData("password", this.password);
    this.localStorageService.saveData("confirmPassword", this.confirmPassword);
    console.log({
      firstName: this.firstName,
      lastName: this.lastName,
      phone: this.phone,
      email: this.email,
      dob:this.dob,
      gender:this.gender,
      password: this.password
    })

    alert("Sing up Successfully")
    this.router.navigateByUrl('login')

  }

}
