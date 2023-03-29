import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreeningEventCreateComponent } from './screening-event-create.component';

describe('ScreeningEventCreateComponent', () => {
  let component: ScreeningEventCreateComponent;
  let fixture: ComponentFixture<ScreeningEventCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScreeningEventCreateComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ScreeningEventCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
