import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteriorPaintingComponent } from './interior-painting.component';

describe('InteriorPaintingComponent', () => {
  let component: InteriorPaintingComponent;
  let fixture: ComponentFixture<InteriorPaintingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InteriorPaintingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InteriorPaintingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
