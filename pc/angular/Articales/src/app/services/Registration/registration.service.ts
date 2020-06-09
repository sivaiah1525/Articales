import { SettingService } from './../setting/setting.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(
    private http: HttpClient,
    private SettingServ: SettingService
  ) { }


  Registration(data) {
    const url = `${this.SettingServ.baseurl}/register`;
    return this.http.post(url, data).toPromise();
  }
}
