import { Component } from "@angular/core";
import {User} from ".sh"

@Component({
  selector: "my-app",
  template: `
          <StackLayout>
              <Image src="res://logo_login" stretch="none" horizontalAlignment="center"></Image>
             <TextField
             [(ngModel)]="email"
             hint="Email Address" keyboardType="email"
             autocorrect="false" autocapitalizationType="none"></TextField>
             <TextField hint="Password" secure="true"></TextField>

            <Button 
            class="submit-button" 
            [text]="isLoggingIn ? 'Sign in' : 'Sign up' "
            (tap)="submit()" >
            </Button>
            <Button 
            [text]="isLoggingIn ? 'Sign up' : 'Back to Login' "
            (tap)="toggleDisplay()"
            ></Button>
          </StackLayout>
            `,
  styleUrls: ["pages/login/login-common.css", "pages/login/login.css"]
})
export class AppComponent {

  email = "desmonmiles@gmail.com";
  isLoggingIn =true;
  submit() {
    console.log("Hello");
    alert("You are using" + this.email);
  }
  toggleDisplay(){
    this.isLoggingIn= !this.isLoggingIn;
  }
}