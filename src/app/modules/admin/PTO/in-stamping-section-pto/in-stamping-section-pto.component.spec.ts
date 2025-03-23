import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InStampingSectionPtoComponent } from './in-stamping-section-pto.component';

describe('InStampingSectionPtoComponent', () => {
  let component: InStampingSectionPtoComponent;
  let fixture: ComponentFixture<InStampingSectionPtoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InStampingSectionPtoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InStampingSectionPtoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
