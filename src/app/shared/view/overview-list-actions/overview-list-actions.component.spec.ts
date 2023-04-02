import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewListActionsComponent } from './overview-list-actions.component';

describe('OverviewListActionsComponent', () => {
  let component: OverviewListActionsComponent;
  let fixture: ComponentFixture<OverviewListActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverviewListActionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OverviewListActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
