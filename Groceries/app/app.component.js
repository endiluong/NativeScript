"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.email = "desmonmiles@gmail.com";
        this.isLoggingIn = true;
    }
    AppComponent.prototype.submit = function () {
        console.log("Hello");
        alert("You are using" + this.email);
    };
    AppComponent.prototype.toggleDisplay = function () {
        this.isLoggingIn = !this.isLoggingIn;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            template: "\n          <StackLayout>\n              <Image src=\"res://logo_login\" stretch=\"none\" horizontalAlignment=\"center\"></Image>\n             <TextField\n             [(ngModel)]=\"email\"\n             hint=\"Email Address\" keyboardType=\"email\"\n             autocorrect=\"false\" autocapitalizationType=\"none\"></TextField>\n             <TextField hint=\"Password\" secure=\"true\"></TextField>\n\n            <Button \n            class=\"submit-button\" \n            [text]=\"isLoggingIn ? 'Sign in' : 'Sign up' \"\n            (tap)=\"submit()\" >\n            </Button>\n            <Button \n            [text]=\"isLoggingIn ? 'Sign up' : 'Back to Login' \"\n            (tap)=\"toggleDisplay()\"\n            ></Button>\n          </StackLayout>\n            ",
            styleUrls: ["pages/login/login-common.css", "pages/login/login.css"]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUEwQjFDO0lBeEJBO1FBMEJFLFVBQUssR0FBRyx1QkFBdUIsQ0FBQztRQUNoQyxnQkFBVyxHQUFFLElBQUksQ0FBQztJQVFwQixDQUFDO0lBUEMsNkJBQU0sR0FBTjtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDckIsS0FBSyxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUNELG9DQUFhLEdBQWI7UUFDRSxJQUFJLENBQUMsV0FBVyxHQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUN0QyxDQUFDO0lBVlUsWUFBWTtRQXhCeEIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFFBQVEsRUFBRSx5d0JBbUJDO1lBQ1gsU0FBUyxFQUFFLENBQUMsOEJBQThCLEVBQUUsdUJBQXVCLENBQUM7U0FDckUsQ0FBQztPQUNXLFlBQVksQ0FXeEI7SUFBRCxtQkFBQztDQUFBLEFBWEQsSUFXQztBQVhZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcIm15LWFwcFwiLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICAgICAgICA8U3RhY2tMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgPEltYWdlIHNyYz1cInJlczovL2xvZ29fbG9naW5cIiBzdHJldGNoPVwibm9uZVwiIGhvcml6b250YWxBbGlnbm1lbnQ9XCJjZW50ZXJcIj48L0ltYWdlPlxyXG4gICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICBoaW50PVwiRW1haWwgQWRkcmVzc1wiIGtleWJvYXJkVHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgIGF1dG9jb3JyZWN0PVwiZmFsc2VcIiBhdXRvY2FwaXRhbGl6YXRpb25UeXBlPVwibm9uZVwiPjwvVGV4dEZpZWxkPlxyXG4gICAgICAgICAgICAgPFRleHRGaWVsZCBoaW50PVwiUGFzc3dvcmRcIiBzZWN1cmU9XCJ0cnVlXCI+PC9UZXh0RmllbGQ+XHJcblxyXG4gICAgICAgICAgICA8QnV0dG9uIFxyXG4gICAgICAgICAgICBjbGFzcz1cInN1Ym1pdC1idXR0b25cIiBcclxuICAgICAgICAgICAgW3RleHRdPVwiaXNMb2dnaW5nSW4gPyAnU2lnbiBpbicgOiAnU2lnbiB1cCcgXCJcclxuICAgICAgICAgICAgKHRhcCk9XCJzdWJtaXQoKVwiID5cclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDxCdXR0b24gXHJcbiAgICAgICAgICAgIFt0ZXh0XT1cImlzTG9nZ2luZ0luID8gJ1NpZ24gdXAnIDogJ0JhY2sgdG8gTG9naW4nIFwiXHJcbiAgICAgICAgICAgICh0YXApPVwidG9nZ2xlRGlzcGxheSgpXCJcclxuICAgICAgICAgICAgPjwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9TdGFja0xheW91dD5cclxuICAgICAgICAgICAgYCxcclxuICBzdHlsZVVybHM6IFtcInBhZ2VzL2xvZ2luL2xvZ2luLWNvbW1vbi5jc3NcIiwgXCJwYWdlcy9sb2dpbi9sb2dpbi5jc3NcIl1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XHJcblxyXG4gIGVtYWlsID0gXCJkZXNtb25taWxlc0BnbWFpbC5jb21cIjtcclxuICBpc0xvZ2dpbmdJbiA9dHJ1ZTtcclxuICBzdWJtaXQoKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIkhlbGxvXCIpO1xyXG4gICAgYWxlcnQoXCJZb3UgYXJlIHVzaW5nXCIgKyB0aGlzLmVtYWlsKTtcclxuICB9XHJcbiAgdG9nZ2xlRGlzcGxheSgpe1xyXG4gICAgdGhpcy5pc0xvZ2dpbmdJbj0gIXRoaXMuaXNMb2dnaW5nSW47XHJcbiAgfVxyXG59Il19