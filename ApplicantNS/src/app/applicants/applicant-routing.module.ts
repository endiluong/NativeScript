import { ApplicantsComponent } from './applicants.component';
import { Routes, RouterModule, Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { ApplicantsDetailComponent } from './applicants-detail/applicants-detail.component';
import { ApplicantItemComponent } from './applicants-list/applicant-item/applicant-item.component';
import { ApplicantsListComponent } from './applicants-list/applicants-list.component';
import { PageNotFoundComponent } from '../utils/page-not-found/page-not-found.component';
import {AuthGuard} from '../guards/auth.guard.service';

const appRoutes: Routes = [
  {
    path: 'applicants',
    component: ApplicantsComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: ApplicantsListComponent
      },
      {
        path: ':id',
        component: ApplicantsDetailComponent
      }

      // {
      //   path: '**',
      //   component: PageNotFoundComponent
      // }
    ]
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
  exports: [RouterModule]
})
export class ApplicantRoutingModule {}
