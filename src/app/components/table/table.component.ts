import { Component, ContentChildren, Input, QueryList } from '@angular/core';
import { TableColumnComponent } from './column.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent<T> {
  @Input() columns: string[];

  @Input() dataSource: T[];

  @ContentChildren(TableColumnComponent)
  columnDefs: QueryList<TableColumnComponent>;
}
