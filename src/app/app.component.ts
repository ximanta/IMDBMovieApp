import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private listId = "LIST_MOVIE"
  title = 'Movie App';
  isLoggedIn = false;
}
