import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm:any = {};

  constructor(public _api: ApiService, public router: Router) { }

  ngOnInit(): void {
  }

  login() : void{
    this._api.post('app/login',this.loginForm).subscribe(loginResponse => {
       let res:any = {token: ''}; 
           res = loginResponse;

       localStorage.setItem('token_access', res.token);
       this.router.navigate(['empleados']);
    });

  }

}
