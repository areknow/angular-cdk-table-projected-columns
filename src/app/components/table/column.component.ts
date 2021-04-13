import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table-column',
  template: '',
})
export class TableColumnComponent {
  @Input() name: string;
  @Input() label: string;
  @Input() formatter: string;
}
