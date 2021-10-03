/* tslint:disable:variable-name */
import {ChangeDetectorRef, Component, EventEmitter, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {DocumentDataProvider} from '../../services/document-data-provider/document-data-provider.service';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {ApplicationDocument} from '../../shared/models/application-document';
import {MatTable} from '@angular/material/table';

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.scss']
})
export class DataListComponent implements OnInit, OnDestroy {
  private destroy$: Subject<boolean> = new Subject();

  currentRow: any;
  displayedColumns: string[] = ['position', 'header', 'date'];
  dataSource = [];
  @ViewChild('table') table: MatTable<any>;

  @Output()
  rowSelected: EventEmitter<ApplicationDocument> = new EventEmitter<ApplicationDocument>();

  constructor(private _documentsProvider: DocumentDataProvider,
              private _changes: ChangeDetectorRef
  ) {
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
  }

  ngOnInit(): void {
    this._documentsProvider.newDocumentIssued$.pipe(takeUntil(this.destroy$)).subscribe(
      s => {
         this.table.renderRows();
      }
    );
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
  }

}
