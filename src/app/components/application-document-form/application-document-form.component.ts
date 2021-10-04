/* tslint:disable:variable-name */
import {Component, Inject, OnInit} from '@angular/core';
import {ApplicationDocument} from '../../shared/models/application-document';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
import {
  ApplicationDocumentSecrecy, ApplicationDocumentPriority,
  ApplicationDocumentScope, ApplicationDocumentType, UserPermissions, UserGroupRole, ApplicationDocumentState
} from '../../shared/models/enums';
import {UserService} from '../../services/user/user.service';
import {DocumentDataProvider} from '../../services/document-data-provider/document-data-provider.service';
import {User} from '../../shared/models/user';
import {faTimesCircle} from '@fortawesome/free-solid-svg-icons';
import {faCheck} from '@fortawesome/free-solid-svg-icons';
import {faFileImport} from '@fortawesome/free-solid-svg-icons';
import {faEdit} from '@fortawesome/free-solid-svg-icons';
import {faQuestionCircle} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-application-document-form',
  templateUrl: './application-document-form.component.html',
  styleUrls: ['./application-document-form.component.scss']
})
export class ApplicationDocumentFormComponent implements OnInit {

  secrecyEnum = ApplicationDocumentSecrecy;
  applicationDocumentPriorityEnum = ApplicationDocumentPriority;
  applicationDocumentScopeEnum = ApplicationDocumentScope;
  applicationDocumentTypeEnum = ApplicationDocumentType;
  applicationDocumentState = ApplicationDocumentState;

  currentUser: User;
  documentFormGroup: FormGroup;
  toggleAccept: FormControl;

  canEdit = true;
  goWild = false;
  faCheck = faCheck;
  faTimesCircle = faTimesCircle;
  faFileImport = faFileImport;
  faEdit = faEdit;
  faQuestionCircle = faQuestionCircle;

  get docAuthor() {
    return (this.currentDoc && this.currentDoc.author) ?
      `${this.currentDoc.author.userDetails.lastName} ${this.currentDoc.author.userDetails.firstName}`
      : 'Unknown';
  }

  constructor(@Inject(MAT_DIALOG_DATA) public currentDoc: ApplicationDocument,
              private _fb: FormBuilder,
              private _user: UserService,
              private _dataService: DocumentDataProvider) {

    this.currentUser = _user.getCurrentUser();
    this.toggleAccept = _fb.control('');


    this.documentFormGroup = this._fb.group(
      {
        author: [currentDoc.author],
        executive: [_user.getCurrentUser()],
        id: [currentDoc.id],
        header: [currentDoc.header, [Validators.required, Validators.maxLength(500)]],
        type: [currentDoc.type],
        createDate: [currentDoc.createDate, [Validators.required]],
        priority: [currentDoc.priority],
        scope: [currentDoc.scope],
        secrecy: [currentDoc.secrecy],
        state: [currentDoc.state],
        body: [currentDoc.body, [Validators.required, Validators.maxLength(2000)]],
        signatures: _fb.array(currentDoc.signatures),

      }
    );
  }

  ngOnInit(): void {
    this.currentUser = this._user.getCurrentUser();
    this.currentDoc.executive = this.currentUser;
    this.setCanEdit();

    if (!this.canEdit) {
      this.documentFormGroup.disable();
    }

    this.checkPermissions();
  }

  getEnumOptions = (e: any) => {
    return Object.keys(e);
  }

  submit = () => {

    if (this.goWild) {
      this.documentFormGroup.controls.state.setValue(this.toggleAccept.value);
    }
    /*
    * потому, что я использую форму как контейнер данных вообще и не хочу терять то что disabled если оно уже установлено
    * */
    this._dataService.postDocument(this.documentFormGroup.getRawValue());
  }

  checkPermissions = () => {
    if (this.currentUser) {
      if (this.currentUser.userGroup.name === UserGroupRole.INITIATOR) {
        this.documentFormGroup.controls.type.disable();
        this.documentFormGroup.controls.scope.disable();
        this.documentFormGroup.controls.priority.disable();
        this.documentFormGroup.controls.secrecy.disable();
      }

      if (this.currentUser.userGroup.name === UserGroupRole.EDITOR) {
        this.documentFormGroup.controls.header.disable();
        this.documentFormGroup.controls.createDate.disable();
        this.documentFormGroup.controls.body.disable();

      }

      if (this.currentUser.userGroup.name === UserGroupRole.CONFIRMER) {
        this.goWild = true;
        this.documentFormGroup.controls.type.disable();
        this.documentFormGroup.controls.scope.disable();
        this.documentFormGroup.controls.priority.disable();
        this.documentFormGroup.controls.secrecy.disable();
        this.documentFormGroup.controls.header.disable();
        this.documentFormGroup.controls.createDate.disable();
        this.documentFormGroup.controls.body.disable();

      }
    }
  }

  setCanEdit = () => {
    if (this.currentDoc.state === ApplicationDocumentState.REJECTED
      || this.currentDoc.state === ApplicationDocumentState.ACCEPTED) {
      this.canEdit = false;
    }

    if (this.currentDoc.executive.userGroup.name === UserGroupRole.INITIATOR
      && this.currentDoc.state !== ApplicationDocumentState.CREATED) {
      this.canEdit = false;
    }

    if (this.currentDoc.executive.userGroup.name === UserGroupRole.EDITOR
      && this.currentDoc.state !== ApplicationDocumentState.PROCESSING) {
      this.canEdit = false;
    }

    if (this.currentDoc.executive.userGroup.name === UserGroupRole.CONFIRMER
      && this.currentDoc.state !== ApplicationDocumentState.ON_CONFIRMATION) {
      this.canEdit = false;
    }
  }
}


