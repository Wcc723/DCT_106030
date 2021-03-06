import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  sitename = 'My Website';
  siteurl = 'http://blog.miniasp.com/';
  subtitle = '記載著 Will 在網路世界的學習心得與技術分享';

  showRed = false;

  constructor() { }

  ngOnInit() {
  }

  changeTitle(evt) {
    console.log(evt);
    if (evt.ctrlKey) {
      this.sitename = 'The Will Will Web';
      this.showRed = !this.showRed;
    }
  }

}
