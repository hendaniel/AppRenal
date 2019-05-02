import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparationPage } from './comparation.page';

describe('ComparationPage', () => {
  let component: ComparationPage;
  let fixture: ComponentFixture<ComparationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComparationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComparationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
