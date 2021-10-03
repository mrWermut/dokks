/* tslint:disable:variable-name */
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {UserService} from '../services/user/user.service';
import {Injectable} from '@angular/core';

@Injectable()
export class DocumentsGuard implements CanActivate {

  constructor(private  _user: UserService,
              private _router: Router) {

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    const user = this._user.getCurrentUser();
    if (user && user.userGroup.permissions) {
      return true;
    }

    this._router.navigate(['login']);
    return false;
  }
}
