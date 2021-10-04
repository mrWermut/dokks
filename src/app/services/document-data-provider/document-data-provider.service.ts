/* tslint:disable:variable-name */

/*
* Фейковый сервис для доставки тестовых данных про документ, заодно эмулирует бекенд
* */
import {Injectable} from '@angular/core';
import {UserDataPrividerService} from '../user-data-provider/user-data-privider.service';
import {ApplicationDocument} from '../../shared/models/application-document';
import {
  ApplicationDocumentPriority,
  ApplicationDocumentScope,
  ApplicationDocumentState,
  ApplicationDocumentType,
  ApplicationDocumentSecrecy, UserGroupRole
} from '../../shared/models/enums';
import {Observable, of, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DocumentDataProvider {

  newDocumentIssued$: Subject<ApplicationDocument> = new Subject<ApplicationDocument>();
  private _documents = new Array<ApplicationDocument>();

  constructor(private _userMocks: UserDataPrividerService) {

    let doc = new ApplicationDocument();
    doc.author = _userMocks.getUser('ivanov');
    doc.scope = ApplicationDocumentScope.GLOBAL;
    doc.body = 'The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.' +
      ' The quick brown fox jumps over the lazy dog';
    doc.createDate = new Date(Date.now());
    doc.header = 'Global Document Number 1';
    doc.priority = ApplicationDocumentPriority.ORANGE;
    doc.secrecy = ApplicationDocumentSecrecy.TOP_SECRET;
    doc.type = ApplicationDocumentType.INTERNAL;
    doc.state = ApplicationDocumentState.CREATED;
    doc.signatures = [this._userMocks.getUser('ivanov'), this._userMocks.getUser('bashirov')];
    this._documents.push(doc);

    doc = new ApplicationDocument();
    doc.author = _userMocks.getUser('petrov');
    doc.scope = ApplicationDocumentScope.REGIONAL;
    doc.body = 'Eat some more of these soft French buns and drink some tea. Eat some more of these soft French buns and drink some tea.' +
      ' Eat some more of these soft French buns and drink some tea.';
    doc.createDate = new Date(Date.now());
    doc.header = 'Public Doc #42';
    doc.priority = ApplicationDocumentPriority.GREEN;
    doc.secrecy = ApplicationDocumentSecrecy.PUBLIC_USE;
    doc.type = ApplicationDocumentType.EXTERNAL;
    doc.state = ApplicationDocumentState.REJECTED;
    doc.signatures = [this._userMocks.getUser('petrov'), this._userMocks.getUser('sidorov'), this._userMocks.getUser('vasechkin')];
    this._documents.push(doc);

  }

  getDocuments = (): Observable<Array<ApplicationDocument>> => {
    return of(this._documents);
  }


  postDocument = (doc: ApplicationDocument) => {
    const index = this._documents.map(el => el.id).indexOf(doc.id);
    const updatedDoc = this.updateSates(doc);
    if (index > -1) {
      this._documents[index] = updatedDoc;
    } else {
      this._documents.push(updatedDoc);
    }

    this.newDocumentIssued$.next(updatedDoc);
  }

  private updateSates = (doc: ApplicationDocument): ApplicationDocument => {
    const userRole = doc.executive.userGroup.name;
    const docState = doc.state;

    if (userRole === UserGroupRole.INITIATOR &&
       docState === ApplicationDocumentState.CREATED) {
       doc.state = ApplicationDocumentState.PROCESSING;
    }
    if (userRole === UserGroupRole.EDITOR &&
      docState === ApplicationDocumentState.PROCESSING) {
      doc.state = ApplicationDocumentState.ON_CONFIRMATION;
    }

    return doc;
  }
}





