/* tslint:disable:variable-name */
import {Component, Inject, OnInit} from '@angular/core';
import {ApplicationDocument} from '../../shared/models/application-document';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {FormGroup, FormControl, Validators, FormArray, FormBuilder} from '@angular/forms';
import {UserGroupRole, UserPermissions, Secrecy, ApplicationDocumentPriority,
  ApplicationDocumentScope , ApplicationDocumentState, ApplicationDocumentType} from '../../shared/models/enums';
@Component({
  selector: 'app-application-document-form',
  templateUrl: './application-document-form.component.html',
  styleUrls: ['./application-document-form.component.scss']
})
export class ApplicationDocumentFormComponent implements OnInit {
  documentTypeOptions: [];
  documentFormGroup: FormGroup;

  userFroupRoleEnum = UserGroupRole;
  userPermissionsEnum = UserPermissions;
  secrecyEnum = Secrecy;
  applicationDocumentPriorityEnum = ApplicationDocumentPriority;
  applicationDocumentScopeEnum = ApplicationDocumentScope;
  applicationDocumentStateEnum = ApplicationDocumentState;
  applicationDocumentTypeEnum = ApplicationDocumentType;


  constructor(@Inject(MAT_DIALOG_DATA) public currentDoc: ApplicationDocument,
              private _formBuilder: FormBuilder) {


/*
*
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
  id: string;

* */

    this.documentFormGroup = this._formBuilder.group(
      {
         header: [currentDoc.header],
         type: [ApplicationDocumentType[currentDoc.type]],
         body: [currentDoc.body],
         priority: [ApplicationDocumentPriority[currentDoc.priority]]
      }
    );
  }
  ngOnInit(): void {
  }

  getEnumOptions = (e: UserGroupRole | UserPermissions | Secrecy |ApplicationDocumentPriority |
                            ApplicationDocumentScope | ApplicationDocumentState | ApplicationDocumentType ) => {
    return Object.keys(e).map( el => ({id: el, option:  el[el]}));

  }
}
