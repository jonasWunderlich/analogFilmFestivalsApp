import { NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnChanges } from '@angular/core';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { LocalIsoDateValueAccessorModule } from 'angular-date-value-accessor';
import { Projection, ProjectionCreate } from 'src/app/core/_models/projection';
import { GenericContentFormComponent } from 'src/app/core/generics/generic-content-form.component';

@Component({
  selector: 'app-projection-form',
  templateUrl: './projection-form.component.html',
  styleUrls: ['./projection-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    NgFor,
    NgIf,
    LocalIsoDateValueAccessorModule,
    ReactiveFormsModule,
    RouterLink,
  ],
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
