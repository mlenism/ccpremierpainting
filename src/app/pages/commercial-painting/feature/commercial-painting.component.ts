import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { CommercialPaintingService } from '../services/commercial-painting.service';
import { ContentBlock } from '../../../core/models/interfaces/content-block';
import { CategoryComponent } from '../../../shared/ui/category/category.component';

@Component({
  selector: 'app-commercial-painting',
  standalone: true,
  imports: [AsyncPipe, CategoryComponent],
  templateUrl: './commercial-painting.component.html',
  styleUrl: './commercial-painting.component.scss',
  providers: [CommercialPaintingService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommercialPaintingComponent {

  private commercialPaintingService = inject(CommercialPaintingService);
  public siteContent$!: Observable<ContentBlock>;

  ngOnInit() {
    this.siteContent$ = this.commercialPaintingService.getData();
  }
}