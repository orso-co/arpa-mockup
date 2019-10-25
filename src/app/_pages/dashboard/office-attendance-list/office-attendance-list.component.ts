import { FakeDataService } from './../../../_services/fake-data.service';
import { OfficeAttendance } from './../../../_models/office-attendance';
import { Component, OnInit } from '@angular/core';
import { faPhone, faClock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-office-attendance-list',
  templateUrl: './office-attendance-list.component.html',
  styleUrls: ['./office-attendance-list.component.css']
})
export class OfficeAttendanceListComponent implements OnInit {
  today = new Date();
  attendances: OfficeAttendance[] = [];
  faPhone = faPhone;
  faClock = faClock;

  constructor(private fakeDataService: FakeDataService) {}

  ngOnInit() {
    this.fakeDataService
      .getOfficeAttendances(this.today)
      .subscribe(att => (this.attendances = att));
  }

  get sortedAttendances(): OfficeAttendance[] {
    return this.attendances.sort(
      (a, b) => this.getTime(b.start) - this.getTime(a.start)
    );
  }

  private getTime(date?: Date) {
    return date != null ? new Date(date).getTime() : 0;
  }
}
