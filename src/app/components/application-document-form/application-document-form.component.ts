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
  secrecyEnum = ApplicationDocumentSecrecy;
  applicationDocumentPriorityEnum = ApplicationDocumentPriority;
  applicationDocumentScopeEnum = ApplicationDocumentScope;
  applicationDocumentTypeEnum = ApplicationDocumentType;



  constructor(@Inject(MAT_DIALOG_DATA) public currentDoc: ApplicationDocument,
              private _fb: FormBuilder,
              private _user: UserService) {




    this.documentFormGroup = this._fb.group(
      {
        header: [currentDoc.header],
        type: [currentDoc.type],
        createDate: [currentDoc.createDate],
        priority: [currentDoc.priority],
        scope: [currentDoc.scope],
        secrecy: [currentDoc.secrecy],
        state: [currentDoc.state],
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
    console.log('docForm', this.currentDoc);


  }

  getEnumOptions = (e: any) => {
     return Object.keys(e) ;
  }

  doCheck = () => {
    console.log ( this.documentFormGroup.value );
  }


}
