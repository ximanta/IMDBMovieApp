import { ComponentFixture, TestBed, async, inject } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, NO_ERRORS_SCHEMA, Injectable } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';

import { Movie } from '../model/movie';
import { MovieListComponent } from './movie-list.component';
import { MovieService } from './movie.service';

import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

describe('MovieListComponent', () => {

  let comp: MovieListComponent;
  let fixture: ComponentFixture<MovieListComponent>;
  let de: DebugElement;  // the DebugElement
  let movieService: MovieService;
  let router: ActivatedRoute;

  // async beforeEach
  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [ MovieListComponent],
      providers:    [
      { provide: MovieService, useClass: MovieServiceStub },
      { provide: Router, useClass: RouterStub },
      { provide: ActivatedRoute, useClass: ActivatedRouteStub } ],
      schemas: [ NO_ERRORS_SCHEMA, ]     // to ignore unrecognized[angular-material] elements and attributes
    }).compileComponents();              // compile template and css
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieListComponent);
    comp    = fixture.componentInstance;
    de = fixture.debugElement;
    movieService = de.injector.get(MovieService);
    router = de.injector.get(ActivatedRoute);
  });

  it('should be created', () => {
    expect(comp).toBeTruthy();
  });

  it('should call get MovieService getMovies method on init', () => {
    const spy = spyOn(movieService, 'getMovies');
    expect(spy.calls.any).toBeTruthy();
  });

});

const makeMovieData = () => [
{
  'Title': 'Arrival',
  'Year': '2016',
  'imdbID': 'tt2543164',
  'Type': 'movie',
  'Poster': 'https://images-na.ssl-images-amazon.com/images\
  /M/MV5BMTExMzU0ODcxNDheQTJeQWpwZ15BbWU4MDE1OTI4MzAy._V1_SX300.jpg'
},
{
  'Title': 'The Arrival',
  'Year': '1996',
  'imdbID': 'tt0115571',
  'Type': 'movie',
  'Poster': 'https://images-na.ssl-images-amazon.com/images\
  /M/MV5BMzhiN2M1NGUtOWVmNi00YWU1LWJlNGMtZDMzYjkwZTQ4MmY4XkEyXkFqcGdeQXVyNjc2NDI1ODA@._V1_SX300.jpg'
},
{
  'Title': 'The Arrival of a Train',
  'Year': '1896',
  'imdbID': 'tt0000012',
  'Type': 'movie',
  'Poster': 'https://images-na.ssl-images-amazon.com/images\
  /M/MV5BZjE2MGVkMTAtMWIwYy00YzQ5LWE2YTAtMTU2NGJmNGNjY2IyXkEyXkFqcGdeQXVyNjMxMzM3NDI@._V1_SX300.jpg'
},
{
  'Title': 'Arrival II',
  'Year': '1998',
  'imdbID': 'tt0122961',
  'Type': 'movie',
  'Poster': 'https://images-na.ssl-images-amazon.com/images\
  /M/MV5BMjA2MDI3NjcyN15BMl5BanBnXkFtZTcwOTMxOTUyMQ@@._V1_SX300.jpg'
}];

class RouterStub {
  navigate(url: string[]) { return url; }
}

@Injectable()
class ActivatedRouteStub {

  // ActivatedRoute.params is Observable
  private subject = new BehaviorSubject(this.testParams);
  params = this.subject.asObservable();

  // Test parameters
  private _testParams: {};
  get testParams() { return this._testParams; }
  set testParams(params: {}) {
    this._testParams = params;
    this.subject.next(params);
  }
}

class MovieServiceStub {

  getMovies(movie: string): Observable<any> {
   return Observable.of(makeMovieData());
  }
}

