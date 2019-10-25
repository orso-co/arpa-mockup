import { Component, OnInit } from '@angular/core';
import { FakeDataService } from 'src/app/_services/fake-data.service';
import { AuthService } from 'src/app/_services/auth.service';
import { ChatMessage } from 'src/app/_models/chat-message';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {
  messages: ChatMessage[] = [];
  constructor(
    private fakeService: FakeDataService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.fakeService
      .getPersonalMessages(this.authService.currentUser.id)
      .subscribe(msgs => {
        this.messages = msgs;
      });
  }
}
