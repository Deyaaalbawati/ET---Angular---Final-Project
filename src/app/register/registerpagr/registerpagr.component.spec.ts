import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterpagrComponent } from './registerpagr.component';

describe('RegisterpagrComponent', () => {
  let component: RegisterpagrComponent;
  let fixture: ComponentFixture<RegisterpagrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterpagrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterpagrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
