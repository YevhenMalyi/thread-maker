import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public readonly title: string = 'Thread Maker';
  public readonly subtitle: string = 'easy text to twitter/threads/bluesky thread converter';
}
