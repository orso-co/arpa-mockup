import { environment } from './../../environments/environment';
import { OfficeAttendance } from './../_models/office-attendance';
import { SurveyParticipation } from './../_models/survey-participation';
import { ChatMessage } from 'src/app/_models/chat-message';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../_models/user';
import { Observable } from 'rxjs';
import { UserProject } from '../_models/user-project';

@Injectable({
  providedIn: 'root'
})
export class FakeDataService {
  constructor(protected httpClient: HttpClient) {}
  baseUrl = environment.fakeApiBaseUrl;

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.baseUrl}/users`);
  }

  getNewMessages(): Observable<ChatMessage[]> {
    return this.httpClient.get<ChatMessage[]>(`${this.baseUrl}/newsComments`);
  }

  getPersonalMessages(userId: string): Observable<ChatMessage[]> {
    return this.httpClient.get<ChatMessage[]>(`${this.baseUrl}/messages`);
  }

  getSurveyParticipations(userId: string): Observable<SurveyParticipation[]> {
    return this.httpClient.get<SurveyParticipation[]>(
      `${this.baseUrl}/surveyParticipations`
    );
  }

  getProjects(): Observable<UserProject[]> {
    return this.httpClient.get<UserProject[]>(`${this.baseUrl}/userProjects`);
  }

  getProject(id: string): Observable<UserProject> {
    return this.httpClient.get<UserProject>(
      `${this.baseUrl}/userProjects/${id}`
    );
  }

  getOfficeAttendances(date: Date): Observable<OfficeAttendance[]> {
    return this.httpClient.get<OfficeAttendance[]>(
      `${this.baseUrl}/officeAttendances`
    );
  }
}
