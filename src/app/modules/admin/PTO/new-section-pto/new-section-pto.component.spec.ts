import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSectionPtoComponent } from './new-section-pto.component';

describe('NewSectionPtoComponent', () => {
  let component: NewSectionPtoComponent;
  let fixture: ComponentFixture<NewSectionPtoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewSectionPtoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewSectionPtoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
