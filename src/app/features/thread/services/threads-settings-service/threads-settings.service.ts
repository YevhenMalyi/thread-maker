import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

const DEFAULT_THREAD_LENGTH = 255;

@Injectable({ providedIn: 'root' })
export class ThreadsSettingService {
  private readonly threadLength$ = new BehaviorSubject<number>(DEFAULT_THREAD_LENGTH);
  private readonly updateOnChange$ = new BehaviorSubject<boolean>(false);

  getThreadLength(): Observable<number> {
    return this.threadLength$.asObservable();
  }

  setThreadLength(length: number) {
    this.threadLength$.next(length);
  }

  getUpdateOnChange(): Observable<boolean> {
    return this.updateOnChange$.asObservable();
  }

  setUpdateOnChange(value: boolean) {
    this.updateOnChange$.next(value);
  }
}