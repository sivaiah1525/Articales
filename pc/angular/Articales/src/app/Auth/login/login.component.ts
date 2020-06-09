import { LoginService } from './../../services/login/login.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginform: FormGroup;
  JWTtoken: any;
  constructor(
    private router: Router,
    private loginserv: LoginService,
    private toastr: ToastrService

  ) { }

  ngOnInit(): void {
    this.loginform = new FormGroup({
      email: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
    });

  }

  async savedata(data) {
    try {
      const token = await this.loginserv.login(data);
      this.router.navigate(['/articales']);
    } catch (error) {
      console.log(error);
      this.toastr.success('Invalid Email');
    }
  }

}
