import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreeningEventOverviewComponent } from './screening-event-overview.component';

describe('EventOverviewComponent', () => {
  let component: ScreeningEventOverviewComponent;
  let fixture: ComponentFixture<ScreeningEventOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScreeningEventOverviewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ScreeningEventOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
