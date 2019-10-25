import { WordpressService } from './../_services/wordpress.service';
import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { AlertifyService } from '../_services/alertify.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { WordpressPost } from '../_models/wordpressPost';

@Injectable()
export class PostListResolver implements Resolve<WordpressPost[]> {
  constructor(
    private wordpressService: WordpressService,
    private router: Router,
    private alertify: AlertifyService
  ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<WordpressPost[]> {
    return this.wordpressService.getPosts().pipe(
      catchError(error => {
        this.alertify.error('Fhler beim Laden der Daten');
        console.log(error);
        this.router.navigate(['/home']);
        return of(null);
      })
    );
  }
}
