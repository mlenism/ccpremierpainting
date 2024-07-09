import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PressureWashingComponent } from './pressure-washing.component';

describe('PressureWashingComponent', () => {
  let component: PressureWashingComponent;
  let fixture: ComponentFixture<PressureWashingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PressureWashingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PressureWashingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
