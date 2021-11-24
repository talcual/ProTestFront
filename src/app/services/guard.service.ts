import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CanActivate } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate {

  constructor(private router: Router, public jwtHelper: JwtHelperService) { }

  canActivate(route:any) {

    let _token:any = localStorage.getItem('token_access');
    if(this.jwtHelper.isTokenExpired(_token)){
      this.router.navigate(['/index']);
      return false;
    }

    return true;

  }

}