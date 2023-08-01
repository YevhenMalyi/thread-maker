import { Component, OnInit, DestroyRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { ThreadsService } from '../../services';

@Component({
  selector: 'app-processed-thread',
  templateUrl: './processed-thread.component.html',
  styleUrls: ['./processed-thread.component.scss']
})
export class ProcessedThreadComponent implements OnInit {
  thread: string[] = [];
  destroyRef = inject(DestroyRef);

  constructor(private threadsService: ThreadsService) {}

  ngOnInit(): void {
    this.threadsService
      .get()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(next => {
        console.log(next);
        this.thread = next;
      });
  }
}