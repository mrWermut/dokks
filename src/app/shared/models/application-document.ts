import {ApplicationDocumentPriority, ApplicationDocumentScope, Secrecy, ApplicationDocumentType, ApplicationDocumentState} from './enums';

import {User} from './user';

export class ApplicationDocument {

  header: string;
  type: ApplicationDocumentType;
  state: ApplicationDocumentState;
  createDate?: Date;
  body: string;
  author: User;
  priority: ApplicationDocumentPriority;
  applicationScope?: ApplicationDocumentScope;
  secrecy: Secrecy;
  executive: User;
  signatures: Array<User>;

  constructor(
  ) {

  }
}
