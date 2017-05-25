import { Component, Input, OnInit, OnChanges} from '@angular/core';
import { MovieService } from './movie.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Movie } from '../model/movie';

@Component({
  selector: 'app-movie-list',
  templateUrl: 'movie-list.component.html',
  styleUrls: ['movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  movies: Movie[] = [];
  errormsg: string;

  constructor(
    private movieService: MovieService,
    private router: Router,
    private route: ActivatedRoute ) { }

  ngOnInit() {
    this.route.params
    .switchMap((params: Params) => this.movieService.getMovies(params['movieName']))
    .subscribe((movie: Movie[]) => {
      movie.length > 0 ? this.movies = movie : this.errormsg = 'Not Found';
      this.movies = movie;
    });
  }
}
