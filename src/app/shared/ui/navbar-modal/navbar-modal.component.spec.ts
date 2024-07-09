import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarModalComponent } from './navbar-modal.component';

describe('NavbarModalComponent', () => {
  let component: NavbarModalComponent;
  let fixture: ComponentFixture<NavbarModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavbarModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
