import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA, Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { MovieService } from './movie.service';
import { MovieDetailsComponent } from './movie-details.component';

import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

const makeMovieData = () => {
  return {
    'Title': 'Arrival',
    'Year': '2016',
    'Rated': 'PG-13',
    'Released': '11 Nov 2016',
    'Runtime': '116 min',
    'Genre': 'Drama, Mystery, Sci-Fi',
    'Director': 'Denis Villeneuve',
    'Writer': 'Eric Heisserer (screenplay), Ted Chiang (based on the story \'Story of Your Life\' written by)',
    'Actors': 'Amy Adams, Jeremy Renner, Forest Whitaker, Michael Stuhlbarg',
    'Plot': 'When twelve mysterious spacecraft appear around the world,\
    linguistics professor Louise Banks is tasked with interpreting the language of the apparent alien visitors.',
    'Language': 'English, Russian, Mandarin',
    'Country': 'USA',
    'Awards': 'Won 1 Oscar. Another 44 wins & 235 nominations.',
    'Poster': 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTExMzU0ODcxNDheQTJeQWpwZ15BbWU4MDE1OTI4MzAy._V1_SX300.jpg',
    'Ratings': [
    {
      'Source': 'Internet Movie Database',
      'Value': '8.0/10'
    },
    {
      'Source': 'Rotten Tomatoes',
      'Value': '94%'
    },
    {
      'Source': 'Metacritic',
      'Value': '81/100'
    }
    ],
    'Metascore': '81',
    'imdbRating': '8.0',
    'imdbVotes': '337,032',
    'imdbID': 'tt2543164',
    'Type': 'movie',
    'DVD': '14 Feb 2017',
    'BoxOffice': '$100,501,349.00',
    'Production': '21 Laps Entertainment',
    'Website': 'http://www.arrivalmovie.com/',
    'Response': 'True'
  };
};

describe('MovieDetailsComponent', () => {
  let component: MovieDetailsComponent;
  let fixture: ComponentFixture<MovieDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieDetailsComponent ],
      providers: [
      { provide: MovieService, useClass: MovieServiceStub },
      { provide: Router, useClass: RouterStub },
      { provide: ActivatedRoute, useClass: ActivatedRouteStub },
      { provide: Location, useClass: LocationStub },
      ],
      schemas: [ NO_ERRORS_SCHEMA, ] // to ignore unrecognized[angular-material] elements and attributes
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should be load MovieDetails on Init', () => {
    expect(component.movieDetails).toEqual(makeMovieData());
  });
});


class RouterStub {
  navigate(url: string[]) { return url; }
}

class ActivatedRouteStub {

  // ActivatedRoute.params is Observable
  private subject = new BehaviorSubject(this.testParams);
  params = this.subject.asObservable();

  // Test parameters
  private _testParams: { };
  get testParams() { return this._testParams; }
  set testParams(params: {}) {
    this._testParams = params;
    this.subject.next(params);
  }

  private testParams2 = {
    imbdId : 'tt2543164'
  };

  // ActivatedRoute.snapshot.params
  get snapshot() {
    return { params: this.testParams2 };
  }
}

class MovieServiceStub {

  viewMovieDetails(imdbID: string) {
    return Observable.of(makeMovieData());
  }

}

class LocationStub {

  back() {

  }
}
