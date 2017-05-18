// import {Injectable, EventEmitter} from '@angular/core';
// import { Subject } from 'rxjs/Subject';

// // Observable operators
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/debounceTime';
// import 'rxjs/add/operator/distinctUntilChanged';

// @Injectable()
// export class EmitterService {

//   private listMovieSource = new Subject<string>();
//   private searchTermsSource = new Subject<string>();

//   // Observable string streams
//   listMovie$ = this.listMovieSource.asObservable();
//   searchTerms$ = this.searchTermsSource
//   .debounceTime(300)          // wait 300ms after each keystroke before considering the term
//   .distinctUntilChanged();    // ignore if next search term is same as previous


//   // Service message commands
//   listMovie(movieName: string) {
//     this.listMovieSource.next(movieName);
//   }

//   seach(searchTerms: string) {
//     this.searchTermsSource.next(searchTerms);
//   }

// }
