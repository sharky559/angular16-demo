import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class ResponseInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          const body = event.body;

          if (body?.code !== '200') {
            console.warn('接口返回异常:', body);
            throw new Error(body?.message || '接口返回错误');
          }

          // 返回包装后的响应，只保留 data
          return event.clone({
            body: body.data
          });
        }

        return event;
      }),
      catchError((error: HttpErrorResponse) => {
        // 全局错误处理
        console.error('请求失败:', error);
        return throwError(() => error);
      })
    );
  }
}
