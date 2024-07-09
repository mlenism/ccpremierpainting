import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { InteriorPaintingService } from '../services/interior-painting.service';
import { ContentBlock } from '../../../core/models/interfaces/content-block';
import { CategoryComponent } from '../../../shared/ui/category/category.component';

@Component({
  selector: 'app-interior-painting',
  standalone: true,
  imports: [AsyncPipe, CategoryComponent],
  templateUrl: './interior-painting.component.html',
  styleUrl: './interior-painting.component.scss',
  providers: [InteriorPaintingService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InteriorPaintingComponent {

  private interiorPaintingService = inject(InteriorPaintingService);
  public siteContent$!: Observable<ContentBlock>;

  ngOnInit() {
    this.siteContent$ = this.interiorPaintingService.getData();
  }
}