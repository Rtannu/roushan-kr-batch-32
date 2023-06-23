import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../local-storage.service';
import {Router, ActivatedRoute,NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{

  firstName: any;
  lastName: any;
  phone: any;
  email: any;
  dob:any;
  gender:any;
  constructor(public localstorageService: LocalStorageService,private router: Router,private route: ActivatedRoute) {
    // this.router.events.subscribe(event => {
    //   if (!(event instanceof NavigationEnd)) { return; }
    //   console.log(event);
    //   this.ngOnInit();
    // });
  //   this.router.routeReuseStrategy.shouldReuseRoute = function() {
  //     return false;
  // };
  
  }

  ngOnInit(): void {
    
    this.firstName = this.localstorageService.getData("firstName");
    this.lastName = this.localstorageService.getData("lastName");
    this.phone = this.localstorageService.getData("phone");
    this.email = this.localstorageService.getData("email");
    this.dob=this.localstorageService.getData("dob");
    this.gender=this.localstorageService.getData("gender");
  }

  logout(){
    this.localstorageService.saveData("isLoggedIn","false")
    if(confirm("Do you want to logout????")){
      this.router.navigate(['login'])
       return true;
    }
    return false;
    // alert("you are going to logout..........")
  }

  editProfile(){
    this.router.navigate(['/edit-profile']);
  }
  
}
