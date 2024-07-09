import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ExteriorPaintingService } from '../services/exterior-painting.service';
import { ContentBlock } from '../../../core/models/interfaces/content-block';
import { CategoryComponent } from '../../../shared/ui/category/category.component';

@Component({
  selector: 'app-exterior-painting',
  standalone: true,
  imports: [AsyncPipe, CategoryComponent],
  templateUrl: './exterior-painting.component.html',
  styleUrl: './exterior-painting.component.scss',
  providers: [ExteriorPaintingService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExteriorPaintingComponent {

  private exteriorPaintingService = inject(ExteriorPaintingService);
  public siteContent$!: Observable<ContentBlock>;

  ngOnInit() {
    this.siteContent$ = this.exteriorPaintingService.getData();
  }
}