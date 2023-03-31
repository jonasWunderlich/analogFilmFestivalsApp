import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectionOverviewComponent } from './projection-overview.component';

describe('ProjectionOverviewComponent', () => {
  let component: ProjectionOverviewComponent;
  let fixture: ComponentFixture<ProjectionOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectionOverviewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectionOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
