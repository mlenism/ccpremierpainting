import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerLinksComponent } from './banner-links.component';

describe('BannerLinksComponent', () => {
  let component: BannerLinksComponent;
  let fixture: ComponentFixture<BannerLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BannerLinksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BannerLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
