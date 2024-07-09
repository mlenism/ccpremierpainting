import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Slide } from '../../../core/models/interfaces/slide';

@Component({
  selector: 'app-banner-links',
  standalone: true,
  imports: [],
  templateUrl: './banner-links.component.html',
  styleUrl: './banner-links.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BannerLinksComponent {
  links = input.required<Slide[]>();
}