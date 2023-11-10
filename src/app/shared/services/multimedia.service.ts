import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MultimediaService {

  callback:EventEmitter<any> = new EventEmitter<any>()

  myObservable1$: Observable<any> = new Observable()

  constructor() {
    
   }
}
