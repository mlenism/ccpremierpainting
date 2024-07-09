import { ChangeDetectionStrategy, Component, ElementRef, HostListener, ViewChild, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ModalInfo } from '../../../core/models/interfaces/modal-info';

@Component({
  selector: 'app-navbar-modal',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './navbar-modal.component.html',
  styleUrl: './navbar-modal.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarModalComponent {
  @ViewChild('modal') modal!: ElementRef;
  modalInfo = input.required<ModalInfo>();
  isModalClosing = false;

  private isModalOpen = false;

  @HostListener('animationend')
  onAnimationEnd() {
    if (this.isModalClosing) {
      this.modal.nativeElement.close();
      this.isModalClosing = false;
    }
  }

  @HostListener('keydown.escape', ['$event'])
  onEscape($event: Event) {
    if (this.isModalOpen) {
      $event.preventDefault();
      this.closeModal();
    }
  }

  showModal() {
    this.modal.nativeElement.showModal();
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalClosing = true;
    this.isModalOpen = false;
  }
}
