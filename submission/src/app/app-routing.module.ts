import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { SubmissionComponent } from './submission/submission.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthLoggedInGaurdService } from './service/auth-logged-in-gaurd.service';
import { AuthBackPageGaurdService } from './service/auth--back-page-gaurd.service';

const routes: Routes = [
  { path: "", component: MainComponent,canActivate:[AuthBackPageGaurdService] },
  { path: "login", component: LoginComponent ,canActivate:[AuthBackPageGaurdService]},
  // {path:"sidebar-menu/profile",component:ProfileComponent,outlet:'aux'},
  {
    path: "sidebar-menu", component: SidebarComponent, children: [
      {
        path: "submission",
        component: SubmissionComponent,
        outlet: "aux"
      },
      {
        path: "dashboard",
        component: DashboardComponent,
        outlet: "aux"
      },
      {
        path: "profile",
        component: ProfileComponent,
        outlet: "aux"
      }
    ],canActivate:[AuthLoggedInGaurdService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
