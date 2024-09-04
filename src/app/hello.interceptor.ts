import { HttpInterceptorFn } from '@angular/common/http';

export const helloInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req);
};
