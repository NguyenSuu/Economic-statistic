import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { Injectable } from '@angular/core';
import { catchError, tap, map } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private authService: AuthService) {
    }


    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = this.authService.tokenSubject.value
        if (token) {
            req = req.clone(
                {
                    setHeaders: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );
        }

        console.log(req)

        return next.handle(req).pipe(
            map(e => {
                console.log(e)
                return e

            }),
            catchError(err => {
                if (err.status == 401) {
                    this.authService.goToSignInPage()
                }
                console.log(err.status)
                return throwError(err)
            })
        );
    }
}