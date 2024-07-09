import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-service-area',
  standalone: true,
  imports: [],
  templateUrl: './service-area.component.html',
  styleUrl: './service-area.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ServiceAreaComponent {

}
