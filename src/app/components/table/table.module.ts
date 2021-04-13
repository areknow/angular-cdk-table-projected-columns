import { CdkTableModule } from '@angular/cdk/table';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TableColumnComponent } from './column.component';
import { TableComponent } from './table.component';

@NgModule({
  declarations: [TableComponent, TableColumnComponent],
  imports: [CommonModule, CdkTableModule],
  exports: [TableComponent, TableColumnComponent],
})
export class TableModule {}
