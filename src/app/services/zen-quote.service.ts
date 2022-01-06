import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { api_url,Quote } from '../shared/quote';

@Injectable({
  providedIn: 'root'
})
export class ZenQuoteService {

  constructor(private http: HttpClient) { }

  getQuotes():Observable<Quote[]>{
    return this.http.get<Quote[]>(api_url)
                    .pipe(catchError(error => {throw new Error(error)}));

  }
}
