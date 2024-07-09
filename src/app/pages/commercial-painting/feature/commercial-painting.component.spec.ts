import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommercialPaintingComponent } from './commercial-painting.component';

describe('CommercialPaintingComponent', () => {
  let component: CommercialPaintingComponent;
  let fixture: ComponentFixture<CommercialPaintingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommercialPaintingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CommercialPaintingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
