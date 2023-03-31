import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreeningEventDetailsComponent } from './screening-event-details.component';

describe('ScreeningEventDetailsComponent', () => {
  let component: ScreeningEventDetailsComponent;
  let fixture: ComponentFixture<ScreeningEventDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScreeningEventDetailsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ScreeningEventDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
