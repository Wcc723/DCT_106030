import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  keyword = '123';

  clearKeyword($event: KeyboardEvent) {
    console.log($event);
    this.keyword = '';
    ($event.target as HTMLInputElement).value = '';
  }

  doSearch(value: string) {
    this.keyword = value;
  }
}
