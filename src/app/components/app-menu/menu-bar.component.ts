/* tslint:disable:variable-name */
import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {UserService} from '../../services/user/user.service';
import {User} from '../../shared/models/user';
import {Router} from '@angular/router';
import {UserPermissions} from '../../shared/models/enums';

@Component({
  selector: 'app-menu',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent implements OnInit {
  addButtonHidden = true;


  currentUser: User;
  @Output() addDocument: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private _user: UserService,
              private _router: Router) {

  }

  ngOnInit(): void {
    this.currentUser = this._user.getCurrentUser();
    this.checkPermissions();
  }

  logout = () => {
    this._user.setCurrentUser(null);
    this._router.navigate(['']);
  }

  addDocumentClick = () => {
    this.addDocument.emit(true);
  }

  checkPermissions = () => {
    if (this.currentUser) {
      if (this.currentUser.userGroup.permissions.includes(UserPermissions.CREATE)) {
        this.addButtonHidden = false;
      }
    }
  }
}
