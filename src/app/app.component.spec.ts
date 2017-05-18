import { ComponentFixture, TestBed, async, inject } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, EventEmitter, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';


describe('AppComponent', () => {

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let debugElement: DebugElement;  // the DebugElement
  let domElement: HTMLElement; // the DOM element

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

  it('should render title in a h1 tag', () => {
    // selecting Debug Element that contains title
    debugElement = fixture.debugElement.query(By.css('h1'));
    // getting DOM Element from Debug Element
    domElement = debugElement.nativeElement;
    fixture.detectChanges();
    expect(domElement.innerText).toContain('Movie Cruiser');
  });

});
