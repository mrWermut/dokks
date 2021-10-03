/* tslint:disable:variable-name */
import {Component, Inject, OnInit} from '@angular/core';
import {ApplicationDocument} from '../../shared/models/application-document';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {FormGroup, FormControl, Validators, FormArray, FormBuilder} from '@angular/forms';
import {
  UserGroupRole, UserPermissions, ApplicationDocumentSecrecy, ApplicationDocumentPriority,
  ApplicationDocumentScope, ApplicationDocumentState, ApplicationDocumentType
} from '../../shared/models/enums';
import {UserService} from '../../services/user/user.service';

@Component({
  selector: 'app-application-document-form',
  templateUrl: './application-document-form.component.html',
  styleUrls: ['./application-document-form.component.scss']
})
export class ApplicationDocumentFormComponent implements OnInit {

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
              private _fb: FormBuilder,
              private _user: UserService) {

    this.typeSelectOptions = this.getEnumOptions(this.applicationDocumentTypeEnum);


    /*
    *



      author: User;


      signatures: Array<User>;
      id: string;

    * */

    this.documentFormGroup = this._fb.group(
      {
        header: [currentDoc.header],
        type: [ApplicationDocumentType[currentDoc.type]],
        createDate: [currentDoc.createDate],
        priority: [ApplicationDocumentPriority[currentDoc.priority]],
        scope: [ApplicationDocumentScope[currentDoc.scope]],
        secrecy: [ApplicationDocumentSecrecy[currentDoc.secrecy]],
        state: [ApplicationDocumentState[currentDoc.state]],
        body: [currentDoc.body],
        user: _fb.group(
          {}
        ),
        signatures: _fb.array( []
        ),
        executive: [currentDoc.executive]
      }
    );
  }

  ngOnInit(): void {
    this.currentDoc.executive = this._user.getCurrentUser();
  }

  getEnumOptions = (e: any) => {
    return Object.keys(e);
  }


}
