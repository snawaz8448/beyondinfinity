import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InRevisionSectionPtoComponent } from './in-revision-section-pto.component';

describe('InRevisionSectionPtoComponent', () => {
  let component: InRevisionSectionPtoComponent;
  let fixture: ComponentFixture<InRevisionSectionPtoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InRevisionSectionPtoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InRevisionSectionPtoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
