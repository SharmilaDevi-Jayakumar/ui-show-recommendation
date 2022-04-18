import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { User } from "./models/user";
import { Observable } from "rxjs";
import { UserInfo } from "./models/user-info";

@Injectable({
  providedIn: 'root'
})
export class UserAuthenticationService {
  private baseUrl="https://springboot-shows.herokuapp.com/user/";
  public userId?: string;

  constructor(private httpClient: HttpClient) { }

  registerUser(user: User): Observable<UserInfo>{
    return this.httpClient.post<UserInfo>(`${this.baseUrl+"register"}`,user);
  }

  userLogin(user: User): Observable<UserInfo>{
    return this.httpClient.post<UserInfo>(`${this.baseUrl+"login"}`,user);
  }
}
