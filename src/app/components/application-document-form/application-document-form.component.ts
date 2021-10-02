/* tslint:disable:variable-name */
import {Component, Inject, OnInit} from '@angular/core';
import {ApplicationDocument} from '../../shared/models/application-document';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {FormGroup, FormControl, Validators, FormArray, FormBuilder} from '@angular/forms';
import {UserGroupRole, UserPermissions, ApplicationDocumentSecrecy, ApplicationDocumentPriority,
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
  secrecyEnum = ApplicationDocumentSecrecy;
  applicationDocumentPriorityEnum = ApplicationDocumentPriority;
  applicationDocumentScopeEnum = ApplicationDocumentScope;
  applicationDocumentStateEnum = ApplicationDocumentState;
  applicationDocumentTypeEnum = ApplicationDocumentType;


  typeSelectOptions: Array<string>;


  constructor(@Inject(MAT_DIALOG_DATA) public currentDoc: ApplicationDocument,
              private _formBuilder: FormBuilder) {

    this.typeSelectOptions = this.getEnumOptions(this.applicationDocumentTypeEnum);



/*
*
  header: string;


  createDate?: Date;
  body: string;
  author: User;

  scope?: ApplicationDocumentScope;

  executive: User;
  signatures: Array<User>;
  id: string;

* */

    this.documentFormGroup = this._formBuilder.group(
      {
         header: [currentDoc.header],
         type: [ApplicationDocumentType[currentDoc.type]],
         priority: [ApplicationDocumentPriority[currentDoc.priority]],
         scope: [ApplicationDocumentScope[currentDoc.scope]],
         secrecy: [ApplicationDocumentSecrecy[currentDoc.secrecy]],
         state: [ApplicationDocumentState[currentDoc.state]],
         body: [currentDoc.body],
      }
    );
  }
  ngOnInit(): void {
  }

  getEnumOptions = (e: any ) => {
    return Object.keys(e);

  }

  /* TODO: paint background based on type */
}
