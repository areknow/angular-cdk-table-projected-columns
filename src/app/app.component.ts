import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  columns = ['id', 'title', 'author'];
  data = [
    {
      id: 1,
      title: 'The Lord of the Rings: The Fellowship of the Ring',
      author: 'J.R.R. Tolkien',
    },
    {
      id: 2,
      title: 'The Lord of the Rings: The Two Towers',
      author: 'J.R.R. Tolkien',
    },
    {
      id: 3,
      title: 'The Lord of the Rings: The Return of the King',
      author: 'J.R.R. Tolkien',
    },
  ];
}
