import { Component, Input, OnInit, OnChanges} from '@angular/core';
import { MovieService } from './movie.service';
import { MovieAppService } from '../shared/movieApp.service';
import { Movie } from '../model/movie';

@Component({
  selector: 'movie-list',
  templateUrl: 'movie-list.component.html',
  styleUrls: ['movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  movies: Movie[] = [];

  constructor( private MovieService: MovieService, private movieAppService: MovieAppService) { }

  ngOnInit() {
    this.movieAppService.searchTerms$.subscribe((movieName) => this.getMovies(movieName));
  }

  getMovies(movieName: string = 'batman') {
    this.MovieService.searchMovie(movieName)
    .subscribe((movies: any) => {
      this.movies = movies;
    });
  }

}
