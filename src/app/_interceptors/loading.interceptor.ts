import { LoadingService } from './../_services/loading.service';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpEventType
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Injectable, Injector } from '@angular/core';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  constructor(
    private injector: Injector,
    private loadingService: LoadingService
  ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (!this.loadingService) {
      this.loadingService = this.injector.get(LoadingService);
    }
    return next.handle(req).pipe(
      tap(res => {
        if (res.type === HttpEventType.Sent) {
          this.loadingService.loading$.next(true);
        }
        if (res.type === HttpEventType.Response) {
          this.loadingService.loading$.next(false);
        }
      })
    );
  }
}
