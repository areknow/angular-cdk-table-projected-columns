# Angular Cdk Table Projected Columns

A quick example showing how to make a wrapper component around the CDK Table or MatTable. Instead of defining the highly verbose column definitions, this allows you to write slim components for the column definitions with options for the name, label, and an optional formatter callback to change the displayed data.

```html
<app-table [dataSource]="data" [columns]="columns">
  <app-table-column name="id" label="ID"></app-table-column>
  <app-table-column name="title" label="Title"></app-table-column>
  <app-table-column name="author" label="Author"></app-table-column>
  <app-table-column
    name="price"
    label="Price"
    [formatter]="priceFormat"
  ></app-table-column>
</app-table>
```

[Take a look at the StackBlitz demo](https://stackblitz.com/edit/angular-ivy-qokxnj?file=src/app/app.component.html)
