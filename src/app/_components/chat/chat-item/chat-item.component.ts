import { Component, OnInit, Input } from '@angular/core';
import { ChatMessage } from 'src/app/_models/chat-message';
import { faClock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-chat-item',
  templateUrl: './chat-item.component.html',
  styleUrls: ['./chat-item.component.css']
})
export class ChatItemComponent implements OnInit {
  @Input()
  chatMessage: ChatMessage;

  @Input()
  isCurrentUser: boolean;

  faClock = faClock;

  constructor() {}

  ngOnInit() {}
}
