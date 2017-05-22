import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { Router } from '@angular/router';
import { MovieAppMaterialModule } from '../movie-app-material.module';

import { Movie } from '../model/movie';
import { MovieService } from '../movie/movie.service';
import { SearchBarComponent } from './search-bar.component';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

// Observable operators
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

describe('SearchBarComponent', () => {
  let component: SearchBarComponent;
  let fixture: ComponentFixture<SearchBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ MovieAppMaterialModule ],
      declarations: [ SearchBarComponent ],
      providers: [
        { provide: Router, useClass: RouterStub },
        { provide: MovieService, useClass: MovieServiceStub }],
      schemas: [ NO_ERRORS_SCHEMA ], // to ignore unrecognized[angular-material] elements and attributes
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

});

// helper stub
class RouterStub {
  navigate(url: string[]) { return url; }
}

class MovieServiceStub {

  private searchTermsSource = new Subject<string>();
  searchTerms$: Observable<any> = this.searchTermsSource
      .debounceTime(300)         // wait 300ms after each keystroke before considering the term
      .distinctUntilChanged();   // ignore if next search term is same as previous

  suggestMovie(searchTerms: string) {
    this.searchTermsSource.next(searchTerms);
  }

  getMovies(movie: string): Observable<Movie[]> {
   return Observable.of([]);
  }
}
