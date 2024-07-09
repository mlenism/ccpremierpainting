import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ReferralsService } from '../services/referrals.service';
import { Slide } from '../../../core/models/interfaces/slide';
import { ParallaxTextComponent } from '../../../shared/ui/parallax-text/parallax-text.component';

@Component({
  selector: 'app-referrals',
  standalone: true,
  imports: [AsyncPipe, ParallaxTextComponent],
  templateUrl: './referrals.component.html',
  styleUrl: './referrals.component.scss',
  providers: [ReferralsService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReferralsComponent {

  private referralsService = inject(ReferralsService);
  public siteContent$!: Observable<Slide>;

  ngOnInit() {
    this.siteContent$ = this.referralsService.getData();
  }
}
