import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddptoComponent } from './addpto.component';

describe('AddptoComponent', () => {
  let component: AddptoComponent;
  let fixture: ComponentFixture<AddptoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddptoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddptoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
