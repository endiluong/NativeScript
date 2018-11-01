import { Component } from "@angular/core";
import {User} from "./shared/user/user"
import {UserService} from "./shared/user/user.service";

@Component({
  selector: "my-app",
  providers: [UserService],
  templateUrl: 'pages/login/login.html',
  styleUrls: ["pages/login/login-common.css", "pages/login/login.css"]
})
export class AppComponent {
  email = "desmonmiles@gmail.com";
  isLoggingIn = true;
  user;

  constructor(private userService: UserService){
    this.user = new User();
  }
  submit() {
    if(this.isLoggingIn){
      this.login();
    }else{
      this.signup();
    }
  }
  toggleDisplay(){
    this.isLoggingIn= !this.isLoggingIn;
  }
  login(){}
  signup(){this.userService.register(this.user);}
}