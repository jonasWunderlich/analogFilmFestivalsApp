import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectionCreateComponent } from './projection-create.component';

describe('ProjectionCreateComponent', () => {
  let component: ProjectionCreateComponent;
  let fixture: ComponentFixture<ProjectionCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectionCreateComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectionCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
