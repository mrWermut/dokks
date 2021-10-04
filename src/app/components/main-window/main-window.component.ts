/* tslint:disable:variable-name */
import { Component, OnInit } from '@angular/core';
import {ApplicationDocument} from '../../shared/models/application-document';
import {MatDialog} from '@angular/material/dialog';
import {ApplicationDocumentFormComponent} from '../application-document-form/application-document-form.component';
import {UserService} from '../../services/user/user.service';

@Component({
  selector: 'app-main-window',
  templateUrl: './main-window.component.html',
  styleUrls: ['./main-window.component.scss']
})
export class MainWindowComponent implements OnInit {

  constructor(public dialog: MatDialog, private _user: UserService ) { }

  rowSelected = (doc: ApplicationDocument) => {
    this.openDialog(doc);

  }

  ngOnInit(): void {
  }

  addDocument = () => {
    this.openDialog(new ApplicationDocument( this._user.getCurrentUser()));
  }

  openDialog = (doc?: ApplicationDocument) => {
    this.dialog.open(ApplicationDocumentFormComponent, {
      data:  doc,
      disableClose: true
    });

  }

}
