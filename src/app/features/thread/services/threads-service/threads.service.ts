import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThreadsService {
  constructor() { }
  
  test(): void {
    console.log('threads service works')
  }
}