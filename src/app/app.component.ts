import { ApplicationRef, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'thread-maker';

  constructor(app: ApplicationRef) {
    requestAnimationFrame(() => app.tick());
  }
}
