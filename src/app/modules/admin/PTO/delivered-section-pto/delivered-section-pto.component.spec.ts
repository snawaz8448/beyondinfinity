import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveredSectionPtoComponent } from './delivered-section-pto.component';

describe('DeliveredSectionPtoComponent', () => {
  let component: DeliveredSectionPtoComponent;
  let fixture: ComponentFixture<DeliveredSectionPtoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeliveredSectionPtoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeliveredSectionPtoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
