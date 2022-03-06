import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { config } from '../config/config';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  config = config
  constructor(private http: HttpClient) {

  }

  auth(data: any) {
    return this.http.post(this.config.url + "/api/auth/", data)
  }

  isLogged(token: any | string) {
    return this.http.get(this.config.url + `/api/auth/${token}`)
  }
}