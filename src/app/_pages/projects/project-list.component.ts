import { UserProject } from './../../_models/user-project';
import { Component, OnInit } from '@angular/core';
import { User } from '../../_models/user';
import { UserService } from '../../_services/user.service';
import { AlertifyService } from '../../_services/alertify.service';
import { ActivatedRoute } from '@angular/router';

export interface QueryParams {
  type: string;
  city: string;
  hidePassed: boolean;
}

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  projects: UserProject[];
  filteredProjects: UserProject[];
  user: User = JSON.parse(localStorage.getItem('user'));
  cityList: Set<string>;
  typeList: Set<string>;
  userParams: QueryParams;

  constructor(
    private userService: UserService,
    private alertify: AlertifyService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.projects = data['projects'];
      this.filteredProjects = this.projects;
      this.cityList = new Set(this.projects.map(p => p.project.city).sort());
      this.typeList = new Set(this.projects.map(p => p.project.type).sort());
    });
    this.resetUserParams();
  }

  resetUserParams() {
    this.userParams = { type: '', city: '', hidePassed: false };
  }

  loadProjects() {
    this.userService.getUserProjects().subscribe(
      (res: UserProject[]) => {
        this.projects = res;
      },
      error => {
        this.alertify.error(error);
      }
    );
  }

  filterProjects() {
    this.filteredProjects = this.projects;
    if (this.userParams.city) {
      this.filteredProjects = this.filteredProjects.filter(
        p => p.project.city === this.userParams.city
      );
    }
    if (this.userParams.type) {
      this.filteredProjects = this.filteredProjects.filter(
        p => p.project.type === this.userParams.type
      );
    }
    if (this.userParams.hidePassed) {
      this.filteredProjects = this.filteredProjects.filter(
        p => !this.isPassed(p)
      );
    }
  }

  isPassed(project: UserProject): boolean {
    const now = new Date().valueOf();
    const projectDate = Date.parse(project.project.date.toString()).valueOf();
    return projectDate - now < 0;
  }

  resetFilters() {
    this.filteredProjects = this.projects;
    this.resetUserParams();
  }
}
