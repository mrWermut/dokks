/* tslint:disable:variable-name */
/*
* Фейковый сервис для доставки тестовых данных про пользователей
* */


import {Injectable} from '@angular/core';
import {User} from '../../shared/models/user';
import {UserGroup} from '../../shared/models/user-group';
import {UserGroupRole, UserPermissions} from '../../shared/models/enums';
import {UserDetails} from '../../shared/models/user-details';

@Injectable({
  providedIn: 'root'
})
export class UserDataPrividerService {


  private _users: Array<User>;

  private _groups = new Map<UserGroupRole, UserGroup>();


  constructor() {
    this._groups.set(
     UserGroupRole.INITIATOR, new UserGroup( UserGroupRole[UserGroupRole.INITIATOR],
       [UserPermissions.LOGIN, UserPermissions.CREATE])
    );

    this._groups.set(
    UserGroupRole.EDITOR, new UserGroup( UserGroupRole[UserGroupRole.EDITOR],
    [UserPermissions.LOGIN, UserPermissions.EDIT])
    );

    this._groups.set(
    UserGroupRole.CONFIRMER, new UserGroup( UserGroupRole[UserGroupRole.CONFIRMER],
    [UserPermissions.LOGIN, UserPermissions.APPROVE, UserPermissions.REJECT])
    );

    this._users.push(
      new User(
        'ivanov',
        this._groups.get(UserGroupRole.INITIATOR),
        new UserDetails('Иванов', 'Иван', 'Ивановнич')
      )

    );

    this._users.push(
      new User(
        'petrov',
        this._groups.get(UserGroupRole.INITIATOR),
        new UserDetails('Петров', 'Петр', 'Петрович')
      )

    );

    this._users.push(
      new User(
        'sidorov',
        this._groups.get(UserGroupRole.EDITOR),
        new UserDetails('Сидоров', 'Сидр', 'Сидорович')
      )

    );

    this._users.push(
      new User(
        'bashirov',
        this._groups.get(UserGroupRole.EDITOR),
        new UserDetails('Баширов', 'Башир', 'Баширович')
      )

    );

    this._users.push(
      new User(
        'vasechkin',
        this._groups.get(UserGroupRole.CONFIRMER),
        new UserDetails('Васечкин', 'Пётр', 'Петрович')
      )

    );

  }


  getUser = (login: string): User => {
    /*Смелое предположение, но это же моки*/
    return this._users.filter( el => el.login === login)[0];
  }
}
