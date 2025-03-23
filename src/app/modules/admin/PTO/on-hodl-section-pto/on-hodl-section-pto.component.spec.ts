import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnHodlSectionPtoComponent } from './on-hodl-section-pto.component';

describe('OnHodlSectionPtoComponent', () => {
  let component: OnHodlSectionPtoComponent;
  let fixture: ComponentFixture<OnHodlSectionPtoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnHodlSectionPtoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OnHodlSectionPtoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
