/* tslint:disable:variable-name */
import {Injectable} from '@angular/core';
import {User} from '../../shared/models/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _currentUser: User;

  constructor() {
  }

  get permissions() {
    throw  new Error('not implemented');
  }

  setCurrentUser(currentUser: User) {
    this._currentUser = currentUser;
  }

  getCurrentUser() {
    return this._currentUser;
  }

  login = (login: string) => {


  };


}
