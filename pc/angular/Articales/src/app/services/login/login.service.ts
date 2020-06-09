import { SettingService } from './../setting/setting.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient,
    private SettingServ: SettingService
  ) { }

  login(data) {
    const url = `${this.SettingServ.baseurl}/login`;
    return this.http.post(url, data).toPromise();
  }
}
