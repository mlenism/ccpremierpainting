import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrywallServicesComponent } from './drywall-services.component';

describe('DrywallServicesComponent', () => {
  let component: DrywallServicesComponent;
  let fixture: ComponentFixture<DrywallServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DrywallServicesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DrywallServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
