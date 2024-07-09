import { ChangeDetectionStrategy, Component, ElementRef, HostListener, ViewChild, input } from '@angular/core';
import { WaResizeObserver } from '@ng-web-apis/resize-observer';
import { ImageInfo } from '../../../core/models/interfaces/image-info';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-parallax',
  standalone: true,
  imports: [WaResizeObserver, CommonModule],
  templateUrl: './parallax.component.html',
  styleUrl: './parallax.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ParallaxComponent {
  /**
   * The element that represents the parallax effect.
   */
  @ViewChild('parallax') parallax!: ElementRef;

  /**
   * The element that represents the background image.
   */
  @ViewChild('background') background!: ElementRef;

  /**
   * The velocity of the parallax effect.
   */
  velocity = input<number>(1);

  /**
   * The image info of the background image.
   */
  backgroundImg = input.required<ImageInfo>();

  /**
   * The CSS class of the background image.
   */
  backgroundClass = input<string>('');

  /**
   * The CSS class of the overlay.
   */
  overlayClass = input<string>('');

  /**
   * Updates the background image position based on the scroll position.
   * 
   * This function is triggered when the window is scrolled.
   * It checks if the parallax element is in the viewport and if so,
   * calculates the new position of the background image based on the scroll position.
   * The new position is then applied to the background image element.
   */
  @HostListener('window:scroll')
  onEvent() {
    // Check if the parallax element and the background image element exist
    if (!this.parallax || !this.background) {
      // If either element is missing, do nothing and return
      return;
    }

    // Get the bounding rectangle of the parallax element
    const rect: DOMRect = this.parallax.nativeElement.getBoundingClientRect();

    // Check if the parallax element is in the viewport
    if (this.isInViewport(rect)) {
      // Calculate the halfway point between the top and bottom of the parallax element
      const middlePosition = Math.trunc((rect.top + rect.bottom) / 2);

      // Calculate the new position of the background image based on the scroll position
      // The new position is the distance between the middle of the viewport and the halfway point of the parallax element
      // Multiplied by the velocity of the parallax effect
      const newPosition = (document.documentElement.clientHeight / 2 - middlePosition);

      // Apply the new position to the background image element
      this.background.nativeElement.style.transform = `translateY(${newPosition * this.velocity()}px)`;
    }
  }

  /**
   * Checks if some part of the given rectangle is visible in the viewport.
   *
   * @param rect The rectangle to check.
   * @returns True if some part of the rectangle is visible, false otherwise.
   */
  private isInViewport(rect: DOMRect) {
    return rect.top <= document.documentElement.clientHeight && rect.bottom > 0;
  }
}