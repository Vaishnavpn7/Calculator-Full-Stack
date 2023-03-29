import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimenumComponent } from './primenum.component';

describe('PrimenumComponent', () => {
  let component: PrimenumComponent;
  let fixture: ComponentFixture<PrimenumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimenumComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimenumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
