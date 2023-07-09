import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { LoginFlagService } from "./login-flag.service";


export const AuthLoggedInGaurdService: CanActivateFn = () => {

  // export const AuthLoggedInGaurdService: CanActivateFn = (
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot
  // ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree => {
  
  const router: Router = inject(Router);
  const loginFlagService: LoginFlagService = inject(LoginFlagService);

  if (loginFlagService.getLoggedInFlag()=="true") {
     return true;
  }
  else {
    return router.navigate(['/login'])
  }

}
