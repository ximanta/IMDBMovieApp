import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { MovieAppMaterialModule } from '../movie-app-material.module';
import { MovieService } from '../movie/movie.service';
import { SearchBarComponent } from './search-bar.component';

describe('SearchBarComponent', () => {
  let component: SearchBarComponent;
  let fixture: ComponentFixture<SearchBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ MovieAppMaterialModule, HttpModule ],
      declarations: [ SearchBarComponent ],
      schemas: [ NO_ERRORS_SCHEMA ], // to ignore unrecognized[angular-material] elements and attributes
      providers: [
        MovieService,
        { provide: Router, useClass: class { navigate = jasmine.createSpy('navigate'); }}],
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
