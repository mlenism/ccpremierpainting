import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { FooterContent } from '../../../core/models/interfaces/footer-content';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {
  content = input.required<FooterContent>();
}