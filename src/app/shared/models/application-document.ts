import {ApplicationDocumentPriority, ApplicationDocumentScope, ApplicationDocumentSecrecy,
  ApplicationDocumentType, ApplicationDocumentState} from './enums';

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

}

