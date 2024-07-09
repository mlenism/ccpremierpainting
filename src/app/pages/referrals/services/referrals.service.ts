import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Slide } from '../../../core/models/interfaces/slide';
import { CONTENT_DATA } from '../static-data/content';

@Injectable()
export class ReferralsService {

  getData(): Observable<Slide> {
    return new Observable((observer) => {
      observer.next(CONTENT_DATA);
      observer.complete();
    })
  }
}
