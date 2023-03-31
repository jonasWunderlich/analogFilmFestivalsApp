import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CinemaFormComponent } from '../../cinema/cinema-form/cinema-form.component';

describe('CinemaFormComponent', () => {
  let component: CinemaFormComponent;
  let fixture: ComponentFixture<CinemaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CinemaFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CinemaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});