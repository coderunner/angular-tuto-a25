import { HttpResponse, HttpInterceptorFn } from '@angular/common/http';
import { of } from 'rxjs';

let index = 0;
const names = ['Alain', 'Gertrude', 'Bob', 'Alice'];

export const demoInterceptor: HttpInterceptorFn = (req, next) => {
  if (req.url === 'http://127.0.0.1:8080/names') {
    return of(
      new HttpResponse({
        body: { name: names[index++ % names.length] },
        status: 200,
      }),
    );
  } else {
    return next(req);
  }
};
