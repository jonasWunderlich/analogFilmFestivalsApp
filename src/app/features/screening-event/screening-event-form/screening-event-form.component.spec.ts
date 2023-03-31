import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreeningEventFormComponent } from './screening-event-form.component';

describe('ScreeningEventFormComponent', () => {
  let component: ScreeningEventFormComponent;
  let fixture: ComponentFixture<ScreeningEventFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScreeningEventFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ScreeningEventFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
