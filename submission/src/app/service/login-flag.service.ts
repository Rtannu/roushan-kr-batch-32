import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginFlagService {

  constructor() { 
  }

  public setLoggedInFlag(isLoggedIn: string) {
    localStorage.setItem("isLoggedIn",isLoggedIn);
  }
  public getLoggedInFlag() {
    return localStorage.getItem("isLoggedIn");
  }
}
