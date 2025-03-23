import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PilSectionPtoComponent } from './pil-section-pto.component';

describe('PilSectionPtoComponent', () => {
  let component: PilSectionPtoComponent;
  let fixture: ComponentFixture<PilSectionPtoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PilSectionPtoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PilSectionPtoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
