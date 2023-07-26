import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

const DEFAULT_THREAD_LENGTH = 255;

@Injectable({ providedIn: 'root' })
export class ThreadsSettingService {
  private readonly threadLength$ = new BehaviorSubject<number>(DEFAULT_THREAD_LENGTH);
  private readonly updateOnChange$ = new BehaviorSubject<boolean>(false);

  get threadLength(): Observable<number> | number {
    return this.threadLength$.asObservable();
  }

  set threadLength(length: number) {
    this.threadLength$.next(length);
  }

  get updateOnChange(): Observable<boolean> | boolean {
    return this.updateOnChange$.asObservable();
  }

  set updateOnChange(value: boolean) {
    this.updateOnChange$.next(value);
  }
}