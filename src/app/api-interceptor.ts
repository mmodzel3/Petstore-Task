import { Inject, Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

    constructor(@Inject('BASE_API_URL') private apiUrl: string) {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const apiReq = request.clone({ url: `${this.apiUrl}/${request.url}` });
        return next.handle(apiReq);
    }
}