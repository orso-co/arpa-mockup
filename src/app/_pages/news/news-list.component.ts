import { Component, OnInit } from '@angular/core';
import { WordpressPost } from 'src/app/_models/wordpressPost';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {
  news: WordpressPost[];
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.news = data['news'];
    });
  }
}
