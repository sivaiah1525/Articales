import { RegistrationService } from './../../services/Registration/registration.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registrationform: FormGroup;

  constructor(
    private router: Router,
    private RegistrationServ: RegistrationService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.registrationform = new FormGroup({
      username: new FormControl(null, [Validators.required]),
      address: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
    });
  }

  async savedata(data) {
    try {
      const result = await this.RegistrationServ.Registration(data);
      this.router.navigate(['/login']);
      this.toastr.success('Registration Sucessful');
    } catch (error) {
      console.log(error);
    }
  }

}
