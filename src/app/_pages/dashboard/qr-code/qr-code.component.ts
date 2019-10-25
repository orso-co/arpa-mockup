import { AuthService } from '../../../_services/auth.service';
import { UserService } from '../../../_services/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../../../_models/user';

@Component({
  selector: 'app-qr-code',
  templateUrl: './qr-code.component.html',
  styleUrls: ['./qr-code.component.css']
})
export class QrCodeComponent implements OnInit {
  user: User;
  constructor(authService: AuthService) {
    this.user = authService.currentUser;
  }

  ngOnInit() {}
}
