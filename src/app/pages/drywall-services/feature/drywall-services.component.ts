import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { DrywallServicesService } from '../services/drywall-services.service';
import { ContentBlock } from '../../../core/models/interfaces/content-block';
import { CategoryComponent } from '../../../shared/ui/category/category.component';

@Component({
  selector: 'app-drywall-services',
  standalone: true,
  imports: [AsyncPipe, CategoryComponent],
  templateUrl: './drywall-services.component.html',
  styleUrl: './drywall-services.component.scss',
  providers: [DrywallServicesService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DrywallServicesComponent {

  private drywallServicesService = inject(DrywallServicesService);
  public siteContent$!: Observable<ContentBlock>;

  ngOnInit() {
    this.siteContent$ = this.drywallServicesService.getData();
  }
}