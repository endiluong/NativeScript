import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { LoginService } from './login.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private loginService: LoginService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (
      this.loginService.sessionUser !== null &&
      this.loginService.sessionUser !== undefined
    ) {
      const cloneereq = req.clone({
        headers: req.headers.append(
          'Authorization',
          'Bearer ' + this.loginService.sessionUser.token
        )
      });

      return next.handle(cloneereq);
    }
    return next.handle(req);
  }
}
