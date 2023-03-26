import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CinemaOverviewComponent } from './cinema-overview.component';

describe('CinemaOverviewComponent', () => {
  let component: CinemaOverviewComponent;
  let fixture: ComponentFixture<CinemaOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CinemaOverviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CinemaOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
