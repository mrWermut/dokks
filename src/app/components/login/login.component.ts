/* tslint:disable:variable-name */
import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user/user.service';
import {Router} from '@angular/router';
import {UserDataPrividerService} from '../../services/user-data-provider/user-data-privider.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username = '';

  constructor(private _user: UserService,
              private _router: Router,
              private _usersData: UserDataPrividerService) {
  }

  ngOnInit(): void {


  }

  login = () => {
    const user = this._usersData.getUser(this.username);
    if (user) {
      this._user.setCurrentUser(user);
      this._router.navigate(['documents']);
    }
  }
}
