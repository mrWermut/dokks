import {
  ApplicationDocumentPriority,
  ApplicationDocumentScope,
  ApplicationDocumentSecrecy,
  ApplicationDocumentState,
  ApplicationDocumentType
} from './enums';

import {User} from './user';

export class ApplicationDocument {

  header: string;
  type: ApplicationDocumentType;
  state: ApplicationDocumentState;
  createDate?: Date;
  body: string;
  author: User;
  priority: ApplicationDocumentPriority;
  scope: ApplicationDocumentScope;
  secrecy: ApplicationDocumentSecrecy;
  executive: User;
  signatures: Array<User>;
  id: string;

  constructor(user?: User) {
    this.header = '';
    this.type = null;
    this.state = ApplicationDocumentState.CREATED;
    this.createDate = new Date(Date.now());
    this.body = '';
    this.author = user ? user : null;
    this.priority = null;
    this.scope = null;
    this.secrecy = null;
    this.executive = user ? user : null;
    this.signatures = new Array<User>();
    if (user) { this.signatures.push(user); }
    this.id = Math.random().toString(6);
  }
}

