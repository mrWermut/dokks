import {User} from './user';
import {ApplicationDocumentState, ApplicationDocumentType} from './enums';

export class ApplicationDocumentFilter {
  beginDate: Date;
  startDate: Date;
  creator: Array<User>;
  state: ApplicationDocumentState;
  type: ApplicationDocumentType;


}
