import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { SubmissionComponent } from './submission/submission.component';
import { SidebarComponent } from './sidebar/sidebar.component';

const routes: Routes = [
  { path: "", component: MainComponent },
  { path: "login", component: LoginComponent },
  // {path:"submission",component:SubmissionComponent,outlet:'aux'},
  {
    path: "sidebar-menu", component: SidebarComponent, children: [
      {
        path: "submission",
        component: SubmissionComponent,
        outlet: "aux"
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
