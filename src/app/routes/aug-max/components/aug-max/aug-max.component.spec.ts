import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AugMaxComponent } from './aug-max.component';

describe('AugMaxComponent', () => {
  let component: AugMaxComponent;
  let fixture: ComponentFixture<AugMaxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AugMaxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AugMaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
