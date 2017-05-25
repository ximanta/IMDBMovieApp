import { Component, Input } from '@angular/core';
import { MovieAppService } from '../shared/movieApp.service';

@Component({
  selector: 'search-bar',
  templateUrl: 'search-bar.component.html',
  styleUrls: ['search-bar.component.css']
})
export class SearchBarComponent {


  constructor( private movieAppService: MovieAppService) { }

  searchMovie(movieName: string) {
    this.movieAppService.addSearchTerms(movieName);
  };
}
