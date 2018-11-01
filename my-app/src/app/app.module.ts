import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import {COMPONENT_DECLARATIONS} from './app.common';

@NgModule({
  declarations: [
    AppComponent,
    ...COMPONENT_DECLARATIONS,
  ],
  imports: [
    BrowserModule,
    LoginModule, 
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
