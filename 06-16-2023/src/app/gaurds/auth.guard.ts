import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { SessionStorageService } from '../session-storage.service';
import { LocalStorageService } from '../local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  constructor(public router: Router,private sessionStorageService:SessionStorageService,private localStorageService: LocalStorageService) {}
  canActivate(): boolean {
    let isLoggedIn=this.localStorageService.getData("isLoggedIn");
    if (isLoggedIn=="false" || isLoggedIn==null) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}