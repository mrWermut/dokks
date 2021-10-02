import {Component, Inject, OnInit} from '@angular/core';
import {ApplicationDocument} from '../../shared/models/application-document';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-application-document-form',
  templateUrl: './application-document-form.component.html',
  styleUrls: ['./application-document-form.component.scss']
})
export class ApplicationDocumentFormComponent implements OnInit {


  constructor(@Inject(MAT_DIALOG_DATA) public initialData: ApplicationDocument) {}
  ngOnInit(): void {
  }

}
