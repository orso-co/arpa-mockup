import { Component, OnInit, Input } from '@angular/core';
import {
  faThumbsUp,
  faThumbsDown,
  faQuestionCircle,
  faInfoCircle,
  faComment
} from '@fortawesome/free-solid-svg-icons';
import { UserProject } from 'src/app/_models/user-project';
import { UserState } from 'src/app/_models/user-state.enum';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent implements OnInit {
  @Input() project: UserProject;
  userState = UserState;
  faThumbsUp = faThumbsUp;
  faThumbsDown = faThumbsDown;
  faQuestionCircle = faQuestionCircle;
  faInfoCircle = faInfoCircle;
  faComment = faComment;

  constructor() {}

  ngOnInit() {}

  isPassed(): boolean {
    const now = new Date().valueOf();
    const projectDate = Date.parse(
      this.project.project.date.toString()
    ).valueOf();
    return projectDate - now < 0;
  }
}
