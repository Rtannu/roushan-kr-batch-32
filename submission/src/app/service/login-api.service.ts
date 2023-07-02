import { Injectable } from '@angular/core';
import { of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginApiService {

  readonly email: string = "";
  readonly password: string = "";
  constructor() {
    this.email = "dnt@gmail.com";
    this.password = "Dnt@2023";
  }

  isValidUser(email: string, password: string) {
    let isValidUser = false;
    if (email == this.email && password == this.password) {
      isValidUser = true;
    }
    return of(isValidUser);
  }
}
