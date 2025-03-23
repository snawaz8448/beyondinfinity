import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PtoComponent } from './pto.component';

describe('PtoComponent', () => {
  let component: PtoComponent;
  let fixture: ComponentFixture<PtoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PtoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PtoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
