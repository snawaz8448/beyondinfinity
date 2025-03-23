import {HttpEvent,HttpHandler,HttpInterceptor,HttpRequest,HttpHandlerFn,HttpInterceptorFn } from '@angular/common/http';
import { Observable } from 'rxjs';



export const authInterceptor: HttpInterceptorFn = (req: HttpRequest<any>, next: HttpHandlerFn): Observable<HttpEvent<any>> => {

  const authToken = localStorage.getItem('authToken');
  // Clone the request and set the new header in one step.
  const authReq = req.clone({
    setHeaders: {
      Authorization: `Bearer ${authToken}`
    }
  });

  return next(req);
};
