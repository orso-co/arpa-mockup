import { FakeDataService } from './fake-data.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BehaviorSubject, of, throwError } from 'rxjs';
import { User } from '../_models/user';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser: User;
  photoUrl = new BehaviorSubject<string>('../../assets/user.png');
  currentPhotoUrl = this.photoUrl.asObservable();

  constructor(
    private http: HttpClient,
    private fakeDataService: FakeDataService
  ) {}

  changeMemberPhoto(photoUrl: string) {
    this.photoUrl.next(photoUrl);
  }

  login(model: any) {
    return this.fakeDataService.getUsers().pipe(
      map(users => {
        const filteredUsers = users.filter(user => {
          return user.userName === model.username;
        });
        if (filteredUsers.length) {
          const user = filteredUsers[0];
          const body = {
            user: user,
            token: 'fake-jwt-token'
          };
          localStorage.setItem('token', body.token);
          localStorage.setItem('user', JSON.stringify(body.user));
          this.currentUser = body.user;
          this.changeMemberPhoto(this.currentUser.photoUrl);
        } else {
          return throwError({
            error: { message: 'Username or password is incorrect' }
          });
        }
      })
    );
  }

  loggedIn(): boolean {
    const token = localStorage.getItem('token');
    if (!token || !this.currentUser) {
      return false;
    }
    return true;
  }
}
