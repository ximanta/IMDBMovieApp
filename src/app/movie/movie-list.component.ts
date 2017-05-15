import { Component, Input, OnInit, OnChanges} from '@angular/core';
import { MovieService } from './movie.service';
import { EmitterService } from '../shared/emitter.service';
import { Movie } from '../model/movie';

@Component({
  selector: 'movie-list',
  templateUrl: 'movie-list.component.html',
  styleUrls: ['movie-list.component.css']
})
export class MovieListComponent implements OnInit, OnChanges {

  @Input()
  listId: string;

  movies: Movie[] = [];

  constructor( private MovieService: MovieService, private emitterService: EmitterService) { }

  ngOnInit() {
    this.getMovies();
  }

  ngOnChanges(changes: any) {
    this.emitterService.get(this.listId).subscribe((movieName: string ) => {
      this.getMovies(movieName);
    });
  }

  getMovies(movieName: string = 'batman') {
    this.MovieService.searchMovie(movieName)
    .subscribe((movies: any) => {
      this.movies = movies;
    });
  }

}
