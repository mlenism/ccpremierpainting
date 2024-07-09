import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { BannerComponent } from '../banner/banner.component';

@Component({
  selector: 'app-banner-text',
  standalone: true,
  imports: [BannerComponent],
  templateUrl: './banner-text.component.html',
  styleUrl: './banner-text.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BannerTextComponent {
  contentTitle = input.required<string>();
}
