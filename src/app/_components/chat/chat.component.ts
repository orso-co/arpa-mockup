import { Component, OnInit, Input } from '@angular/core';
import { ChatMessage } from 'src/app/_models/chat-message';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  @Input()
  chatMessages: ChatMessage[] = [];
  currentUserId = '';

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.currentUserId = this.authService.currentUser.id;
  }

  get sortedChatMessages(): ChatMessage[] {
    return this.chatMessages.sort(
      (a, b) => this.getTime(b.date) - this.getTime(a.date)
    );
  }

  private getTime(date?: Date) {
    return date != null ? new Date(date).getTime() : 0;
  }
}
