import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TakeattendanceComponent } from './takeattendance.component';

describe('TakeattendanceComponent', () => {
  let component: TakeattendanceComponent;
  let fixture: ComponentFixture<TakeattendanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TakeattendanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TakeattendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
