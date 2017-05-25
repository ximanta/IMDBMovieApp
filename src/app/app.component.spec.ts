import { ComponentFixture, TestBed, async, inject } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, EventEmitter, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';


describe('AppComponent', () => {

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  // async beforeEach
  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [ AppComponent ],
      schemas:      [ NO_ERRORS_SCHEMA ] // to ignore unrecognized[angular-material] elements and attributes
    }).compileComponents();              // compile template and css
  }));

  // sync beforeEach
  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should have as title \'Movie Cruiser\'', () => {
    expect(component.title).toEqual('Movie Cruiser');
  });

});
