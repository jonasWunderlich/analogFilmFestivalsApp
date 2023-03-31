import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreeningEventEditComponent } from './screening-event-edit.component';

describe('ScreeningEventEditComponent', () => {
  let component: ScreeningEventEditComponent;
  let fixture: ComponentFixture<ScreeningEventEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreeningEventEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScreeningEventEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
