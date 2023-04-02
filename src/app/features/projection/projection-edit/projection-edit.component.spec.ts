import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectionEditComponent } from './projection-edit.component';

describe('ProjectionEditComponent', () => {
  let component: ProjectionEditComponent;
  let fixture: ComponentFixture<ProjectionEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectionEditComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectionEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
