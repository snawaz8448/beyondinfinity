import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapAutoCompleteComponent } from './map-auto-complete.component';

describe('MapAutoCompleteComponent', () => {
  let component: MapAutoCompleteComponent;
  let fixture: ComponentFixture<MapAutoCompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MapAutoCompleteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MapAutoCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
