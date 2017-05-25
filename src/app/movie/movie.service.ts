import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';
import { Movie } from '../model/movie';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

// Observable operators
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';


@Injectable()
export class MovieService {

  apiUrl = 'http://www.omdbapi.com/';

  private searchTermsSource = new Subject<string>();
  searchTerms$: Observable<any> = this.searchTermsSource
      .debounceTime(300)         // wait 300ms after each keystroke before considering the term
      .distinctUntilChanged();   // ignore if next search term is same as previous

  constructor( private http: Http ) { }

  getMovies(movie: string): Observable<any> {
    return this.http.get(`${this.apiUrl}?s=${movie}`)
    .map((res: Response) => res.json()['Search'] || [])
    .catch(this.handleError);
  }

  viewMovie(imdbID: string) {
    return this.http.get(`${this.apiUrl}?i=${imdbID}&plot=full`)
    .map((res: Response) => res.json())
    .catch(this.handleError);
  }

  suggestMovie(searchTerms: string) {
    this.searchTermsSource.next(searchTerms);
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
