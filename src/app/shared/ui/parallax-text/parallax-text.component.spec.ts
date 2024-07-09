import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParallaxTextComponent } from './parallax-text.component';

describe('ParallaxTextComponent', () => {
  let component: ParallaxTextComponent;
  let fixture: ComponentFixture<ParallaxTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParallaxTextComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ParallaxTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
