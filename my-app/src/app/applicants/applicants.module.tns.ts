import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { ApplicantListComponent } from './applicant-list/applicant-list.component';
import { ApplicantDetailComponent } from './applicant-detail/applicant-detail.component';
import { ApplicantItemComponent } from './applicant-list/applicant-item/applicant-item.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    NativeScriptCommonModule
  ],
  declarations: [ApplicantListComponent, ApplicantDetailComponent, ApplicantItemComponent, HeaderComponent, FooterComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ApplicantsModule { }
