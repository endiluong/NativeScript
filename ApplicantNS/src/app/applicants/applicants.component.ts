import { Component, OnInit } from '@angular/core';
import { ApplicantRepository } from '../shared/repositories/applicant.repository';
import { StageRepository } from '../shared/repositories/stage.repository';
import { PositionRepository } from '../shared/repositories/position.repository';

@Component({
  selector: 'app-applicants',
  templateUrl: './applicants.component.html',
  styleUrls: ['./applicants.component.css'],
  providers: [
    ApplicantRepository,
    StageRepository,
    PositionRepository
  ]
})
export class ApplicantsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
