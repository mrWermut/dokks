import {UserPermissions} from './enums';

export class UserGroup {
  permissions: Array<UserPermissions>;
  name: string;
  constructor( name: string, permissions: Array<UserPermissions>) {
    this.name = name;
    this.permissions = permissions;
  }
}
