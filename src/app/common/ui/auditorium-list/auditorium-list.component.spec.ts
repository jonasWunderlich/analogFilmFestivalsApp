import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditoriumListComponent } from './auditorium-list.component';

describe('AuditoriumListComponent', () => {
  let component: AuditoriumListComponent;
  let fixture: ComponentFixture<AuditoriumListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuditoriumListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuditoriumListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
