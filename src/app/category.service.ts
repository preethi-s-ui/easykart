import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, of, tap } from "rxjs";


@Injectable({providedIn:'root'
})

export class CategoryService {
    constructor(private http: HttpClient) {

    }

    httpOptions = {
        headers: new HttpHeaders({
            'Content-type': 'application/json'
        })
    }

    fetchCategory():any {

        return this.http.get('https://fakestoreapi.com/products/categories', this.httpOptions)
        .pipe(tap((res:any)=>res))
        // catchError(this.errorHandler<any>("no category"))
    
    }

    errorHandler<T>(Observable = 'operation', result?: T) {
        return (error:any) : Observable<T> =>
        {
            return of(result as T)
        }
    }

}
