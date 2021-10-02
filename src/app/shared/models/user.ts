
import {UserGroup} from './user-group';
import {UserDetails} from './user-details';


export class User {
  login: string;
  userGroup: UserGroup;
  userDetails: UserDetails;

  constructor(login: string, userGroup: UserGroup, userDetails: UserDetails) {
    this.login = login;
    this.userGroup = userGroup;
    this.userDetails = userDetails;

  }
}
