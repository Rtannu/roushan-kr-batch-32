import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SingUpComponent } from './sing-up/sing-up.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuardService } from './gaurds/auth.guard';
import { AuthGuardLoginService } from './gaurds/auth.gaurd.login';

const routes: Routes = [
  {path:'',component:SingUpComponent,canActivate:[AuthGuardLoginService]},
  {path:'login',component:LoginComponent,canActivate:[AuthGuardLoginService]},
  {path:'profile',component:ProfileComponent,canActivate:[AuthGuardService]},

];

@NgModule({
  // imports: [RouterModule.forRoot(routes,{onSameUrlNavigation: 'reload'})],
  imports: [RouterModule.forRoot(routes)],

  // imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule { }
