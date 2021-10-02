/* tslint:disable:variable-name */

/*
* Фейковый сервис для доставки тестовых данных про документы
* */
import {Injectable} from '@angular/core';

import {ApplicationDocumentFilter} from '../../shared/models/application-document-filter';
import {UserDataPrividerService} from '../user-data-provider/user-data-privider.service';
import {ApplicationDocument} from '../../shared/models/application-document';
import {
  ApplicationDocumentPriority,
  ApplicationDocumentScope,
  ApplicationDocumentState,
  ApplicationDocumentType,
  Secrecy
} from '../../shared/models/enums';
import {Observable, of, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DocumentDataProvider {

  private _documents =  new Array<ApplicationDocument>();

  constructor(private _userMocks: UserDataPrividerService) {

    let doc = new ApplicationDocument();
    doc.author = _userMocks.getUser('ivanov');
    doc.applicationScope = ApplicationDocumentScope.GLOBAL;
    doc.body = 'The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.' +
      ' The quick brown fox jumps over the lazy dog';
    doc.createDate =  new Date (Date.now());
    doc.header = 'Global Document Number 1';
    doc.priority = ApplicationDocumentPriority.ORANGE;
    doc.secrecy = Secrecy.TOP_SECRET;
    doc.type = ApplicationDocumentType.INTERNAL;
    doc.signatures = [this._userMocks.getUser('ivanov'), this._userMocks.getUser('bashirov')];
    doc.id = '1';
    this._documents.push(doc);

    doc = new ApplicationDocument();
    doc.author = _userMocks.getUser('petrov');
    doc.applicationScope = ApplicationDocumentScope.REGIONAL;
    doc.body = 'Eat some more of these soft French buns and drink some tea. Eat some more of these soft French buns and drink some tea.' +
      ' Eat some more of these soft French buns and drink some tea.';
    doc.createDate =  new Date (Date.now());
    doc.header = 'Public Doc #42';
    doc.priority = ApplicationDocumentPriority.GREEN;
    doc.secrecy = Secrecy.PUBLIC_USE;
    doc.type = ApplicationDocumentType.EXTERNAL;
    doc.state =  ApplicationDocumentState.REJECTED;
    doc.id = '42';
    doc.signatures = [this._userMocks.getUser('petrov'), this._userMocks.getUser('sidorov'), this._userMocks.getUser('vasechkin')];
    this._documents.push(doc);

  }

  getDocuments = (): Observable<Array<ApplicationDocument>> => {
    return  of(this._documents);
  }




}
