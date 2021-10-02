/* tslint:disable:variable-name */

/*
* Фейковый сервис для доставки тестовых данных про документы
* */
import {Injectable} from '@angular/core';

import {ApplicationDocumentFilter} from '../../shared/models/application-document-filter';
import {UserDataPrividerService} from '../user-data-provider/user-data-privider.service';
import {ApplicationDocument} from '../../shared/models/application-document';

@Injectable({
  providedIn: 'root'
})
export class DocumentDataProvider {

  private _documents =  new Array<ApplicationDocument>();

  constructor(private _userMocks: UserDataPrividerService) {

  }

  getDocuments = (filter: ApplicationDocumentFilter) => {

  }


}
