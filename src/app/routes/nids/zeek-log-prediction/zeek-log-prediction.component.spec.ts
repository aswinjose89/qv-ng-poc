import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZeekLogPredictionComponent } from './zeek-log-prediction.component';

describe('ZeekLogPredictionComponent', () => {
  let component: ZeekLogPredictionComponent;
  let fixture: ComponentFixture<ZeekLogPredictionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZeekLogPredictionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZeekLogPredictionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
