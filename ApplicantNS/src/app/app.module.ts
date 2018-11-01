import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ApplicantsComponent } from './applicants/applicants.component';
import { ApplicantsListComponent } from './applicants/applicants-list/applicants-list.component';
import { ApplicantsDetailComponent } from './applicants/applicants-detail/applicants-detail.component';
import { ApplicantItemComponent } from './applicants/applicants-list/applicant-item/applicant-item.component';
import { ConfirmationDialogComponent } from './utils/confirmation-dialog/confirmation-dialog.component';
import { PageNotFoundComponent } from './utils/page-not-found/page-not-found.component';
import { HeaderComponent } from './applicants/header/header.component';
import { LoginComponent } from './login/login.component';
import { ConfirmationDialogService } from './utils/confirmation-dialog/confirmation-dialog.service';
import { LoginService } from './shared/services/login.service';
import { AuthGuard } from './guards/auth.guard.service';
import { CookieModule, CookieService } from 'ngx-cookie';
import { BaseService } from './shared/services/base.service';
import { AuthInterceptor } from './shared/services/auth.interceptor';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ApplicantRoutingModule } from './applicants/applicant-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ApplicantsComponent,
    ApplicantsListComponent,
    ApplicantsDetailComponent,
    ApplicantItemComponent,
    ConfirmationDialogComponent,
    PageNotFoundComponent,
    HeaderComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    ApplicantRoutingModule,
    CookieModule.forRoot()
  ],
  providers: [
    ConfirmationDialogService,
    LoginService,
    AuthGuard,
    CookieService,
    BaseService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
