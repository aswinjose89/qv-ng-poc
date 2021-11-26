import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllNidsPacketsTblComponent } from './all-nids-packets-tbl.component';

describe('AllNidsPacketsTblComponent', () => {
  let component: AllNidsPacketsTblComponent;
  let fixture: ComponentFixture<AllNidsPacketsTblComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllNidsPacketsTblComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllNidsPacketsTblComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
