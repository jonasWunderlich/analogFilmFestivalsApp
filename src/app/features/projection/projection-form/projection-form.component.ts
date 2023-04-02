import { NgFor, NgIf } from '@angular/common';
import { Component, OnChanges } from '@angular/core';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { LocalIsoDateValueAccessorModule } from 'angular-date-value-accessor';
import { Projection, ProjectionCreate } from 'src/app/core/_models/projection';
import { GenericContentFormComponent } from 'src/app/core/generics/generic-content-form.component';

@Component({
  selector: 'app-projection-form',
  templateUrl: './projection-form.component.html',
  styleUrls: ['./projection-form.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule, NgFor, NgIf, LocalIsoDateValueAccessorModule],
})
export class ProjectionFormComponent
  extends GenericContentFormComponent<Projection, ProjectionCreate>
  implements OnChanges
{
  override form = this.fb.group({
    title: ['', [Validators.required]],
    date: [new Date().toJSON(), [Validators.required]],
    tmdb: ['', []],
    black: [false, []],
    agent: ['', []],
    text: ['', []],
  });
}
