import { FakeDataService } from './fake-data.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserProject } from '../_models/user-project';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private fakeDataService: FakeDataService) {}

  getUserProjects(): Observable<UserProject[]> {
    return this.fakeDataService.getProjects();
  }

  getUserProject(id: string): Observable<UserProject> {
    return this.fakeDataService.getProject(id);
  }
}
