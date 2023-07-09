import { Component, Input } from '@angular/core';
import { LoginFlagService } from '../service/login-flag.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {


  constructor(public loginFlagService:LoginFlagService,private router:Router,private route:ActivatedRoute){
  }

  logout(){
    this.loginFlagService.setLoggedInFlag('false');
    this.router.navigateByUrl('');
  }

  openProfile(){
    this.router.navigate(["sidebar-menu",{ outlets: { aux: ["profile"] } }]);
  }

}
