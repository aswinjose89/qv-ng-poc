import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RlAssistComponent } from './rl-assist.component';

describe('RlAssistComponent', () => {
  let component: RlAssistComponent;
  let fixture: ComponentFixture<RlAssistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RlAssistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RlAssistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
