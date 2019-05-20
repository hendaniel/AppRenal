import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDietPage } from './new-diet.page';

describe('NewDietPage', () => {
  let component: NewDietPage;
  let fixture: ComponentFixture<NewDietPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewDietPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewDietPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
