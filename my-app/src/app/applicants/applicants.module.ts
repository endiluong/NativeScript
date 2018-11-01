import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicantListComponent } from './applicant-list/applicant-list.component';
import { ApplicantDetailComponent } from './applicant-detail/applicant-detail.component';
import { ApplicantItemComponent } from './applicant-list/applicant-item/applicant-item.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ApplicantListComponent, ApplicantDetailComponent, ApplicantItemComponent, HeaderComponent, FooterComponent]
})
export class ApplicantsModule { }
