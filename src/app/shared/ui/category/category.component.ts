import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { FragmentComponent } from '../fragment/fragment.component';
import { ContentBlock } from '../../../core/models/interfaces/content-block';
import { BannerTextComponent } from '../banner-text/banner-text.component';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [BannerTextComponent, FragmentComponent],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoryComponent {
  content = input.required<ContentBlock>();
}
