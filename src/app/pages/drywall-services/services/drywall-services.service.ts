import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ContentBlock } from '../../../core/models/interfaces/content-block';
import { CONTENT_DATA } from '../static-data/content';

@Injectable()
export class DrywallServicesService {

  getData(): Observable<ContentBlock> {
    return new Observable((observer) => {
      observer.next(CONTENT_DATA);
      observer.complete();
    })
  }
}