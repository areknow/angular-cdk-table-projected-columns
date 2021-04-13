import { CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private currencyPipe: CurrencyPipe) {}

  columns = ['id', 'title', 'author', 'price'];

  data = [
    {
      id: 1,
      title: 'The Lord of the Rings: The Fellowship of the Ring',
      author: 'J.R.R. Tolkien',
      price: 11.82,
    },
    {
      id: 2,
      title: 'The Lord of the Rings: The Two Towers',
      author: 'J.R.R. Tolkien',
      price: 16.99,
    },
    {
      id: 3,
      title: 'The Lord of the Rings: The Return of the King',
      author: 'J.R.R. Tolkien',
      price: 14.44,
    },
  ];

  priceFormat = (value: number) => {
    return this.currencyPipe.transform(value);
  };
}
