import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreInfoProductPage } from './more-info-product.page';

describe('MoreInfoProductPage', () => {
  let component: MoreInfoProductPage;
  let fixture: ComponentFixture<MoreInfoProductPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoreInfoProductPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreInfoProductPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
