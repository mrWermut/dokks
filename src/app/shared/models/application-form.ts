import {ApplicationFormPriority, ApplicationScope, Secrecy, ApplicationFormType, ApplicationFormState} from './enums';
import {User} from './user';

export class ApplicationForm {
  header?: string;
  type?: ApplicationFormType;
  state: ApplicationFormState;
  createDate?: Date;
  body?: string;
  author: User;
  priority?: ApplicationFormPriority;
  applicationScope?: ApplicationScope;
  secrecy?: Secrecy;
  executive: User;
  signatures: Array<User>;
}
