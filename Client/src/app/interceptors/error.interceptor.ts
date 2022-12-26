import { ToastrModule, ToastrService } from 'ngx-toastr';
import { NavigationExtras, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private router: Router, private toastr: ToastrService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error) => {
        if(error) {
          switch (error.status) {
            case 404:
              this.router.navigateByUrl('/not-found')
              break;
            case 400:
              if(error.error.errors) {
                const errors = [];
                for(let key in error.error.errors) {
                  if (error.error.errors[key]) {
                    errors.push(error.error.errors[key])
                  }
                }
                throw errors.flat();
              } else {
                this.toastr.error(error.error, error.status);
              }
              break;
            case 401:
              this.toastr.error(error.status + " Unauthorized")
              break;
            case 500:
              const navigateExtras : NavigationExtras = {state: {error: error.error}};
              this.router.navigateByUrl('/server-error', navigateExtras)
              break;
            default:
              this.toastr.error('something went wrong');
              break;
          }
        }
        return throwError(error);
      })
    )
  }
}
