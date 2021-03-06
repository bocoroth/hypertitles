import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PerformanceHotkeysComponent } from './performance-hotkeys.component';

describe('PerformanceHotkeysComponent', () => {
  let component: PerformanceHotkeysComponent;
  let fixture: ComponentFixture<PerformanceHotkeysComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PerformanceHotkeysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerformanceHotkeysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
