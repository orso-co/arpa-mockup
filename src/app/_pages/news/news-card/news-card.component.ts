import { Component, OnInit, Input } from '@angular/core';
import { faInfoCircle, faComment } from '@fortawesome/free-solid-svg-icons';
import { WordpressPost } from 'src/app/_models/wordpressPost';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.css']
})
export class NewsCardComponent implements OnInit {
  @Input() newsItem: WordpressPost;
  faInfo = faInfoCircle;
  faComment = faComment;

  constructor() {}

  ngOnInit() {}
}
