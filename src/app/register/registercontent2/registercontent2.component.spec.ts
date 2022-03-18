import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Registercontent2Component } from './registercontent2.component';

describe('Registercontent2Component', () => {
  let component: Registercontent2Component;
  let fixture: ComponentFixture<Registercontent2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Registercontent2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Registercontent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
