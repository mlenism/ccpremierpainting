import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ParallaxComponent } from '../parallax/parallax.component';
import { CommonModule } from '@angular/common';
import { Slide } from '../../../core/models/interfaces/slide';

@Component({
  selector: 'app-parallax-text',
  standalone: true,
  imports: [ParallaxComponent, CommonModule],
  templateUrl: './parallax-text.component.html',
  styleUrl: './parallax-text.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ParallaxTextComponent {
  content = input.required<Slide>();
  titleClass = input<string>('');
  subtitleClass = input<string>('');
  backgroundClass = input<string>('');
  overlayClass = input<string>('');
  coverClass = input<string>('');
  velocity = input<number>(0.85);
}
