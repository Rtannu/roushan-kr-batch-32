import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { EditProfileComponent } from '../edit-profile/edit-profile.component';
 
@Injectable({
    providedIn: 'root'
}
)
export class DeactivateGuard implements CanDeactivate<EditProfileComponent> 
{
 
   constructor(){
   }
 
   canDeactivate(component:EditProfileComponent,
                route: ActivatedRouteSnapshot, 
                state: RouterStateSnapshot,
                nextState: RouterStateSnapshot) : Observable<boolean> | Promise<boolean> | boolean {
        
        return component.canExit();
 
  }
  
}