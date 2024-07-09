import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Fragment } from '../../../core/models/interfaces/fragment';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-fragment',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './fragment.component.html',
  styleUrl: './fragment.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FragmentComponent {
  fragment = input.required<Fragment>();
  sectionClass = input<string>('');
}
