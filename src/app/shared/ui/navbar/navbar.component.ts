import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, HostListener, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { NavbarModalComponent } from '../navbar-modal/navbar-modal.component';
import { NavContent } from '../../../core/models/interfaces/nav-content';
import { A11yModule } from '@angular/cdk/a11y'

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatIconModule, CommonModule, RouterLink, NavbarModalComponent, A11yModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent {
  menuClass = '';
  content = input.required<NavContent>();

  @HostListener('window:resize')
  onWindowResize() {
    if (window.innerWidth >= 1026) {
      this.menuClass = '';
    }
  }

  @HostListener('animationend')
  onAnimationEnd() {
    if (this.menuClass === 'close') {
      this.menuClass = '';
    }
  }

  @HostListener('keydown.escape', ['$event'])
  onEscape($event: Event) {
    $event.preventDefault();
    if (this.menuClass === 'open') {
      this.closeMenu();
    }
  }

  showMenu() {
    this.menuClass = 'open';
  }

  closeMenu() {
    this.menuClass = 'close';
  }
}