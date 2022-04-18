import { Component, OnInit } from '@angular/core';
import {User} from "../../models/user";
import {UserAuthenticationService} from "../../user-authentication.service";
import {UserInfo} from "../../models/user-info";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnInit {

  user:User = new User();
  public userId?: string;
  public userResults: UserInfo = new UserInfo();
  public isUserRegistered: boolean | undefined;
  constructor(private userAuthenticationService: UserAuthenticationService, private router: Router) { }

  ngOnInit(): void {
  }

  registerUser() {
    this.userAuthenticationService.registerUser(this.user).subscribe((data) =>{
      alert("User Registration Successful");
      this.userAuthenticationService.userId = data.user_id;
      localStorage.setItem("userId",data.user_id);
      this.isUserRegistered = data.isRegistered;
      this.router.navigate(['home-page'])
    },error => alert("Registration unsuccessful, try again"));
  }
  userLogin() {
    this.userAuthenticationService.userLogin(this.user).subscribe((data) =>{
      if(data.isRegistered = true){
        alert("User Login Successful");
        this.userAuthenticationService.userId = data.user_id;
        localStorage.setItem("userId",data.user_id);
        this.isUserRegistered = data.isRegistered;
        this.router.navigate(['home-page'])
      }
      else {
        alert("Login unsuccessful, try again with correct username and password");
      }
    },error => alert("Login unsuccessful, try again with correct username and password"));
  }

}
