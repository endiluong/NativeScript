"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.submit = function () {
        console.log('Hello');
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            template: "\n          <StackLayout>\n              <Image src=\"res://logo_login\" stretch=\"none\" horizontalAlignment=\"center\"></Image>\n             <TextField hint=\"Email Address\" keyboardType=\"email\"\n             autocorrect=\"false\" autocapitalizationType=\"none\"></TextField>\n             <TextField hint=\"Password\" secure=\"true\"></TextField>\n\n            <Button text=\"Sign in\" class=\"submit-button\" (tap)=\"submit()\" ></Button>\n            <Button text=\"Sign up for Groceries\"></Button>\n          </StackLayout>\n            ",
            styleUrls: ['pages/login/login-common.css', 'pages/login/login.css']
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFpQjFDO0lBQUE7SUFJQSxDQUFDO0lBSEMsNkJBQU0sR0FBTjtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDdkIsQ0FBQztJQUhVLFlBQVk7UUFmeEIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFFBQVEsRUFBRSx1aUJBVUM7WUFDWCxTQUFTLEVBQUUsQ0FBQyw4QkFBOEIsRUFBRSx1QkFBdUIsQ0FBQztTQUNyRSxDQUFDO09BQ1csWUFBWSxDQUl4QjtJQUFELG1CQUFDO0NBQUEsQUFKRCxJQUlDO0FBSlksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwibXktYXBwXCIsXG4gIHRlbXBsYXRlOiBgXG4gICAgICAgICAgPFN0YWNrTGF5b3V0PlxuICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwicmVzOi8vbG9nb19sb2dpblwiIHN0cmV0Y2g9XCJub25lXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cImNlbnRlclwiPjwvSW1hZ2U+XG4gICAgICAgICAgICAgPFRleHRGaWVsZCBoaW50PVwiRW1haWwgQWRkcmVzc1wiIGtleWJvYXJkVHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICBhdXRvY29ycmVjdD1cImZhbHNlXCIgYXV0b2NhcGl0YWxpemF0aW9uVHlwZT1cIm5vbmVcIj48L1RleHRGaWVsZD5cbiAgICAgICAgICAgICA8VGV4dEZpZWxkIGhpbnQ9XCJQYXNzd29yZFwiIHNlY3VyZT1cInRydWVcIj48L1RleHRGaWVsZD5cblxuICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVwiU2lnbiBpblwiIGNsYXNzPVwic3VibWl0LWJ1dHRvblwiICh0YXApPVwic3VibWl0KClcIiA+PC9CdXR0b24+XG4gICAgICAgICAgICA8QnV0dG9uIHRleHQ9XCJTaWduIHVwIGZvciBHcm9jZXJpZXNcIj48L0J1dHRvbj5cbiAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxuICAgICAgICAgICAgYCxcbiAgc3R5bGVVcmxzOiBbJ3BhZ2VzL2xvZ2luL2xvZ2luLWNvbW1vbi5jc3MnLCAncGFnZXMvbG9naW4vbG9naW4uY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcbiAgc3VibWl0KCl7XG4gICAgY29uc29sZS5sb2coJ0hlbGxvJyk7XG4gIH1cbn0iXX0=