import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sr2mlComponent } from './sr2ml.component';

describe('Sr2mlComponent', () => {
  let component: Sr2mlComponent;
  let fixture: ComponentFixture<Sr2mlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sr2mlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Sr2mlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
