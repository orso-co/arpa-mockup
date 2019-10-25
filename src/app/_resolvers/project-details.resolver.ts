import { AuthService } from '../_services/auth.service';
import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { UserService } from '../_services/user.service';
import { AlertifyService } from '../_services/alertify.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { UserProject } from '../_models/user-project';

@Injectable()
export class ProjectDetailsResolver implements Resolve<UserProject> {
  constructor(
    private userService: UserService,
    private router: Router,
    private alertify: AlertifyService
  ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<UserProject> {
    return this.userService.getUserProject(route.params['id']).pipe(
      catchError(error => {
        this.alertify.error('Fhler beim Laden der Daten');
        this.router.navigate(['/home']);
        return of(null);
      })
    );
  }
}
