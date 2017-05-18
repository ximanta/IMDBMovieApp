import { ComponentFixture, TestBed, async, inject } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, EventEmitter, NO_ERRORS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';

import { Movie } from '../model/movie';
import { MovieCardComponent } from './movie-card.component';

describe('MovieCardComponent', () => {

  let comp: MovieCardComponent;
  let fixture: ComponentFixture<MovieCardComponent>;
  let de: DebugElement;  // the DebugElement
  let el: HTMLElement; // the DOM element

  const expectedMovie = {
    'Title': 'Batman Begins',
    'Year': '2005',
    'imdbID': 'tt0372784',
    'Type': 'movie',
    'Poster': 'https://images-na.ssl-images-amazon.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg'
  };

  class RouterStub {
    navigate(url) { return url; }
  }

  // async beforeEach
  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [ MovieCardComponent ],
      providers: [ { provide: Router, useClass: RouterStub } ],
      schemas:      [ NO_ERRORS_SCHEMA, ] // to ignore unrecognized[angular-material] elements and attributes
    }).compileComponents();  // compile template and css
  }));

  // sync beforeEach
  beforeEach(() => {
    fixture = TestBed.createComponent(MovieCardComponent);
    comp    = fixture.componentInstance;
    // setting movie value to component
    comp.movie = expectedMovie;
  });

  it('should be created', () => {
    expect(comp).toBeTruthy();
  });

  it('should display movie title', () => {
    // selecting Debug Element that contains Title
    de = fixture.debugElement.query(By.css('md-card-title'));
    // getting DOM Element from Debug Element
    el = de.nativeElement;
    fixture.detectChanges();
    expect(el.textContent).toContain(expectedMovie.Title);
  });

  it('should display movie Year', () => {
    // selecting Debug Element that contains Year
    de = fixture.debugElement.query(By.css('md-card-subtitle'));
    // getting DOM Element from Debug Element
    el = de.nativeElement;
    fixture.detectChanges();
    expect(el.textContent).toContain(expectedMovie.Year);
  });

  it('should display movie Poster', () => {
    // selecting Debug Element that contains Poster
    de = fixture.debugElement.query(By.css('img'));
    // getting DOM Element from Debug Element
    el = de.nativeElement;
    fixture.detectChanges();
    expect(el.getAttribute('src')).toEqual(expectedMovie.Poster);
  });

  it('should display Type', () => {
    // selecting Debug Element that contains Type
    de = fixture.debugElement.query(By.css('md-card-subtitle'));
    // getting DOM Element from Debug Element
    el = de.nativeElement;
    fixture.detectChanges();
    expect(el.textContent).toContain(expectedMovie.Type);
  });

  it('should not display ImdbID', () => {
    // selecting Debug Element that may contains ImdbID
    de = fixture.debugElement.query(By.css('md-card'));
    // getting DOM Element from Debug Element
    el = de.nativeElement;
    fixture.detectChanges();
    expect(el.textContent.includes(expectedMovie.imdbID)).toBeFalsy();
  });

});
