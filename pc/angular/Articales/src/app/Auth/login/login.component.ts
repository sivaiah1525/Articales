import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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

  ) { }

  ngOnInit(): void {
    this.loginform = new FormGroup({
      mailId: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
    });

  }

  async savedata(data) {
 console.log(data);
 this.router.navigate(['/articales']);

  }

}
