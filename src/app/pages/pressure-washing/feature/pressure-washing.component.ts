import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { PressureWashingService } from '../services/pressure-washing.service';
import { ContentBlock } from '../../../core/models/interfaces/content-block';
import { CategoryComponent } from '../../../shared/ui/category/category.component';

@Component({
  selector: 'app-pressure-washing',
  standalone: true,
  imports: [AsyncPipe, CategoryComponent],
  templateUrl: './pressure-washing.component.html',
  styleUrl: './pressure-washing.component.scss',
  providers: [PressureWashingService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PressureWashingComponent {

  private pressureWashingService = inject(PressureWashingService);
  public siteContent$!: Observable<ContentBlock>;

  ngOnInit() {
    this.siteContent$ = this.pressureWashingService.getData();
  }
}