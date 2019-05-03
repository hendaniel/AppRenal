import { Injectable } from '@angular/core';
import { UserService } from './Services/user.service';
import { Router, CanActivate} from '@angular/router';
import {ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router/src/router_state';

@Injectable()
export class NeedAuthGuard implements CanActivate {

  constructor(private services: UserService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    const redirectUrl = route['_routerState']['url'];
    
    if (this.services.isLogin())
      return true;
    
    console.log("Not Logged");

    /*
    this.router.navigateByUrl(
      this.router.createUrlTree(
        ['/login'], {
          queryParams: {
            redirectUrl
          }
        }
      )
    );

    
    */

    this.router.navigateByUrl("/login");

    return false;
  }
}