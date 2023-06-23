import { Component } from '@angular/core';
import { LocalStorageService } from '../local-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent {

  firstName: any;
  lastName: any;
  phone: any;
  email: any;
  dob: any;
  gender: any;
  password: any;
  confirmPassword: any;
  isProfileSaved = false;
  constructor(private localStorageService: LocalStorageService, private router: Router) {
    this.firstName = localStorageService.getData("firstName");
    this.lastName = localStorageService.getData("lastName");
    this.phone = localStorageService.getData("phone");
    this.email = localStorageService.getData("email");
    this.dob = localStorageService.getData("dob");
    this.gender = localStorageService.getData("gender");
    this.password = localStorageService.getData("password");
    this.confirmPassword = localStorageService.getData("confirmPassword");


  }

  canExit(): boolean {
    if (!this.isProfileSaved) {
      if (confirm("Your profile is not saved... Do you want to exit????????")) {
        return true
      } else {
        return false
      }

    } else {
      return true;
    }

  }

  save() {
    this.localStorageService.saveData("firstName", this.firstName);
    this.localStorageService.saveData("lastName", this.lastName);
    this.localStorageService.saveData("phone", this.phone);
    this.localStorageService.saveData("email", this.email);
    this.localStorageService.saveData("dob", this.dob);
    this.localStorageService.saveData("gender", this.gender);
    this.localStorageService.saveData("password", this.password);
    this.localStorageService.saveData("confirmPassword", this.confirmPassword);
    this.isProfileSaved = true;
  }

  backProfile() {
    this.router.navigate(['/profile']);
  }
}
