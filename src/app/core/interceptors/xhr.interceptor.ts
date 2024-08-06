import { Observable, tap } from 'rxjs';

import {
  HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse
} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class XhrInterceptor implements HttpInterceptor {

  constructor() {}

  // Intercepts Http request and add XML Http request header to hide Basic auth requiring dialog.
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const xhr = request.clone({
      // requestは直接変更できないためクローン後、Basic認証で表示されるポップアップ非表示をヘッダーへ設定
      headers: request.headers.set('X-Requested-With', 'XMLHttpRequest')
    });
    return next.handle(xhr).pipe(
      tap(event => {
        if (event instanceof HttpResponse) {
          console.log('共通レスポンスハンドラ：status:' + event.status + ' url:' + event.url);
        }
      })
    );
  }
}
