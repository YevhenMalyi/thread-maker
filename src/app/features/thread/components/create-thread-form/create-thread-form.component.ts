import { Component, OnInit } from '@angular/core';
import { ThreadsService } from '../../services';

@Component({
  selector: 'app-create-thread-form',
  templateUrl: './create-thread-form.component.html',
  styleUrls: ['./create-thread-form.component.scss']
})
export class CreateThreadFormComponent implements OnInit {
  constructor(private threadsService: ThreadsService) {
  }

  ngOnInit(): void {
    this.threadsService.test();
  }
}