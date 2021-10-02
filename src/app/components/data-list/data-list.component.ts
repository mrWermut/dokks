/* tslint:disable:variable-name */
import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {DocumentDataProvider} from '../../services/document-data-provider/document-data-provider.service';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {ApplicationDocument} from '../../shared/models/application-document';

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.scss']
})
export class DataListComponent implements OnInit, OnDestroy {
  private  destroy$: Subject<boolean> = new Subject();

  currentRow: any;
  displayedColumns: string[] = ['position', 'header', 'date'];
  dataSource = [];


  @Output()
  rowSelected: EventEmitter<ApplicationDocument> = new EventEmitter<ApplicationDocument>();

  constructor(private _documentsProvider: DocumentDataProvider ) {
     this.currentRow = undefined;
     this._documentsProvider.getDocuments().pipe(takeUntil(this.destroy$)).subscribe(
        s => {
          this.dataSource = s;
        }
     );

  }

  rowClicked = (el: ApplicationDocument) => {
    this.currentRow = el;
    this.rowSelected.emit(el);
  };

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);

  }

}
