/* tslint:disable:variable-name */
import {Component, OnDestroy, OnInit} from '@angular/core';
import {DocumentDataProvider} from '../../services/document-data-provider/document-data-provider.service';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.sass']
})
export class DataListComponent implements OnInit, OnDestroy {

  private  destroy$: Subject<boolean> = new Subject();

  constructor(private _documentsProvider: DocumentDataProvider ) {

     this._documentsProvider.getDocuments().pipe(takeUntil(this.destroy$)).subscribe(
       s => console.log(s)
     );

  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);

  }

}
