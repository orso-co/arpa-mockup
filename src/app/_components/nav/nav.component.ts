import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/_services/auth.service';
import { AlertifyService } from 'src/app/_services/alertify.service';

export interface NavItem {
  title: string;
  link: string[];
}

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};
  photoUrl: string;
  faUser = faUser;
  faSignOut = faSignOutAlt;
  navItems: NavItem[] = [
    {
      title: 'Dashboard',
      link: ['/dashboard']
    },
    {
      title: 'News',
      link: ['/news']
    },
    {
      title: 'Projekte',
      link: ['/projects']
    },
    {
      title: 'Termine',
      link: ['/appointments']
    },
    {
      title: 'Anwesenheiten',
      link: ['/attendance']
    },
    {
      title: 'Reisekosten',
      link: ['/travelcosts']
    },
    {
      title: 'Kontoverlauf',
      link: ['/accounthistory']
    },
    {
      title: 'Karten',
      link: ['/tickets']
    }
  ];

  constructor(
    public authService: AuthService,
    private alertify: AlertifyService,
    private router: Router
  ) {}

  ngOnInit() {
    this.authService.currentPhotoUrl.subscribe(
      photoUrl => (this.photoUrl = photoUrl)
    );
  }

  login() {
    this.authService.login(this.model).subscribe(
      next => {
        this.alertify.success('Herzlich Willkommen!');
      },
      error => {
        this.alertify.error(error);
      },
      () => {
        this.router.navigate(['/dashboard']);
      }
    );
  }

  loggedIn() {
    const token = localStorage.getItem('token');
    return !!token;
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.authService.currentUser = null;
    this.alertify.message('Bis zum nächsten Mal!');
    this.router.navigate(['/home']);
  }
}
