import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {

  isLoggedIn=false;

  constructor() { }

  public setLoggedInTrue(){
    this.isLoggedIn=true;
  }

  public setLoggedInFalse(){
    this.isLoggedIn=false;
  }
  
  public getIsLoggedIn(){
    return this.isLoggedIn;
  }
}
