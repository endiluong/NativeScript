import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';

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


// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from 'nativescript-angular/forms';

// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
// import { NativeScriptHttpClientModule } from 'nativescript-angular/http-client';

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
    LoginComponent,
  ],
  imports: [
    NativeScriptModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
