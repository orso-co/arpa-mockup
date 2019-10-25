import { Component, OnInit } from '@angular/core';
import {
  faCalendarCheck,
  faCalendarTimes
} from '@fortawesome/free-solid-svg-icons';
import { SurveyParticipation } from 'src/app/_models/survey-participation';
import { AuthService } from 'src/app/_services/auth.service';
import { FakeDataService } from 'src/app/_services/fake-data.service';

@Component({
  selector: 'app-survey-list',
  templateUrl: './survey-list.component.html',
  styleUrls: ['./survey-list.component.css']
})
export class SurveyListComponent implements OnInit {
  surveys: SurveyParticipation[] = [];
  faCalendarCheck = faCalendarCheck;
  faCalendarTimes = faCalendarTimes;

  constructor(
    private authService: AuthService,
    private fakeDataService: FakeDataService
  ) {}

  ngOnInit() {
    this.fakeDataService
      .getSurveyParticipations(this.authService.currentUser.id)
      .subscribe(parts => {
        this.surveys = parts;
      });
  }

  get sortedSurveys(): SurveyParticipation[] {
    return this.surveys.sort(
      (a, b) => this.getTime(b.startDate) - this.getTime(a.startDate)
    );
  }

  private getTime(date?: Date) {
    return date != null ? new Date(date).getTime() : 0;
  }
}
