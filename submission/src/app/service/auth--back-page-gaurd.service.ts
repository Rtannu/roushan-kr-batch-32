import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { LoginFlagService } from "./login-flag.service";


export const AuthBackPageGaurdService: CanActivateFn = () => {
  const router: Router = inject(Router);
  const loginFlagService: LoginFlagService = inject(LoginFlagService);

  if (loginFlagService.getLoggedInFlag() == null || loginFlagService.getLoggedInFlag() == 'false') {
    return true;
  }
  else {
    return router.navigateByUrl('sidebar-menu');
  }

}
