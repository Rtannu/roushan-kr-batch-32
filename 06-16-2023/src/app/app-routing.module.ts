import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SingUpComponent } from './sing-up/sing-up.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'sing-up',component:SingUpComponent},
  {path:'profile',component:ProfileComponent},

];

@NgModule({
  // imports: [RouterModule.forRoot(routes,{onSameUrlNavigation: 'reload'})],
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule { }
