import {Injectable, EventEmitter} from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class MovieAppService {

  private searchTermsSource = new Subject<string>();

  // Observable string streams
  searchTerms$ = this.searchTermsSource.asObservable();

  // Service message commands
  addSearchTerms(searchTerms: string) {
    this.searchTermsSource.next(searchTerms);
  }
}
