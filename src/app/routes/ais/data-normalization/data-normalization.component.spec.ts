import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataNormalizationComponent } from './data-normalization.component';

describe('DataNormalizationComponent', () => {
  let component: DataNormalizationComponent;
  let fixture: ComponentFixture<DataNormalizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataNormalizationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataNormalizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
