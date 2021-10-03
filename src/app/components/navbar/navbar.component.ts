/* tslint:disable:variable-name */
import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user/user.service';
import {User} from '../../shared/models/user';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  currentUser: User;
  constructor( private _user: UserService,
               private _router: Router) {

  }

  ngOnInit(): void {
    this.currentUser = this._user.getCurrentUser();
  }

  logout = () => {
    this._user.setCurrentUser(null);
    this._router.navigate(['']);
  }
}
