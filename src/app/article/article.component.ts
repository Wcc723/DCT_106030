import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @Input()
  item;

  constructor(public datasvc: DataService) { }

  ngOnInit() {
  }

}
