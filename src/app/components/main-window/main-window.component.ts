import { Component, OnInit } from '@angular/core';
import {ApplicationDocument} from '../../shared/models/application-document';

@Component({
  selector: 'app-main-window',
  templateUrl: './main-window.component.html',
  styleUrls: ['./main-window.component.scss']
})
export class MainWindowComponent implements OnInit {

  constructor() { }


  rowSelected = (doc: ApplicationDocument) => {
    console.log(doc);

  }

  ngOnInit(): void {
  }


}
