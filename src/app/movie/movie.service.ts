import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class MovieService {

  apiUrl = 'http://www.omdbapi.com/';

  constructor( private http: Http ) { }

  searchMovie(movie: string): Observable<any> {
    return this.http.get(`${this.apiUrl}?s=${movie}`)
    .map((res: Response) => res.json()['Search'])
    .catch(this.handleError);
  }

  viewMovieDetails(imdbID: string) {
    console.log(imdbID);
    return this.http.get(`${this.apiUrl}?i=${imdbID}&plot=full`)
    .map((res: Response) => res.json())
    .catch(this.handleError);
  }

  private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    return Observable.throw(errMsg);
  }
}
