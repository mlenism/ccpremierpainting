import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './shared/ui/navbar/navbar.component';
import { FooterComponent } from './shared/ui/footer/footer.component';
import { BACKGROUND } from './core/constants/img-url';
import { NAVBAR_CONTENT } from './core/constants/navbar-content';
import { FOOTER_CONTENT } from './core/constants/footer-content';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  backgroundImg = BACKGROUND;
  navContent = NAVBAR_CONTENT;
  footerContent = FOOTER_CONTENT;
}
