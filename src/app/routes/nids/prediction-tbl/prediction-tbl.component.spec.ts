import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PredictionTblComponent } from './prediction-tbl.component';

describe('PredictionTblComponent', () => {
  let component: PredictionTblComponent;
  let fixture: ComponentFixture<PredictionTblComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PredictionTblComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PredictionTblComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
