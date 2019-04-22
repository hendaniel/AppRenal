import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HabitPage } from './habit.page';

describe('HabitPage', () => {
  let component: HabitPage;
  let fixture: ComponentFixture<HabitPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HabitPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HabitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
