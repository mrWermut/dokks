/* tslint:disable:variable-name */
import {Component, Inject, OnInit} from '@angular/core';
import {ApplicationDocument} from '../../shared/models/application-document';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {FormGroup,  FormBuilder} from '@angular/forms';
import {ApplicationDocumentSecrecy, ApplicationDocumentPriority,
  ApplicationDocumentScope, ApplicationDocumentType} from '../../shared/models/enums';
import {UserService} from '../../services/user/user.service';
import {DocumentDataProvider} from '../../services/document-data-provider/document-data-provider.service';

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
              private _user: UserService,
              private _dataService: DocumentDataProvider) {


    this.documentFormGroup = this._fb.group(
      {
        id: [currentDoc.id],
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
        signatures: _fb.array([]
        ),
        executive: [currentDoc.executive]
      }
    );
  }

  ngOnInit(): void {}

  getEnumOptions = (e: any) => {
    return Object.keys(e);
  }

  doCheck = () => {
    console.log(this.documentFormGroup.value);
  }

  submit = () => {
    this._dataService.postDocument(this.documentFormGroup.value);
  }
}

