import { Component, OnInit, ViewChild } from '@angular/core';
import { WordpressPost } from 'src/app/_models/wordpressPost';
import { TabsetComponent } from 'ngx-bootstrap';
import { ActivatedRoute } from '@angular/router';
import { ChatMessage } from 'src/app/_models/chat-message';
import { FakeDataService } from 'src/app/_services/fake-data.service';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.css']
})
export class NewsDetailsComponent implements OnInit {
  @ViewChild('memberTabs')
  memberTabs: TabsetComponent;
  newsItem: WordpressPost;
  newsMessages: ChatMessage[] = [];

  constructor(
    private route: ActivatedRoute,
    private fakeService: FakeDataService
  ) {}

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.newsItem = data['newsItem'];
    });

    this.fakeService.getNewMessages().subscribe(messages => {
      this.newsMessages = messages;
    });

    this.route.queryParams.subscribe(params => {
      const selectedTab = params['tab'];
      this.memberTabs.tabs[selectedTab > 0 ? selectedTab : 0].active = true;
    });
  }

  selectTab(tabId: number) {
    this.memberTabs.tabs[tabId].active = true;
  }
}
