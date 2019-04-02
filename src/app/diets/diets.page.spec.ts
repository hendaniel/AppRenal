import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DietsPage } from './diets.page';

describe('DietsPage', () => {
  let component: DietsPage;
  let fixture: ComponentFixture<DietsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DietsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DietsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
