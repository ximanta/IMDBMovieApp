import { Component, Input, OnInit, OnChanges} from '@angular/core';
import { SearchService } from './search.service';
import { EmitterService } from './emitter.service';

@Component({
  selector: 'movie-list',
  templateUrl: 'movie-list.component.html',
  styleUrls: ['movie-list.component.css']
})
export class MovieListComponent implements OnInit, OnChanges {

  @Input()
  listId: string;

  movies: any[] = [];

  constructor( private searchService: SearchService, private emitterService: EmitterService) { }

  ngOnInit() {
    this.getMovies();
  }

  ngOnChanges(changes: any) {
    this.emitterService.get(this.listId).subscribe((movie: string ) => {
      this.getMovies(movie);
      console.log(changes);
    });
  }

  getMovies(movie: string = 'batman') {
    this.searchService.searchMovie(movie)
    .subscribe((movieArray: any) => {
      this.movies = movieArray;
    });
  }

}
