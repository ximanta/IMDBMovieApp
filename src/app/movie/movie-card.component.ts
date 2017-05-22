import { Component, Input } from '@angular/core';
import { Movie } from '../model/movie';
import { Router, } from '@angular/router';

@Component({
  selector: 'app-movie-card',
  templateUrl: 'movie-card.component.html',
  styleUrls: ['movie-card.component.css']
})
export class MovieCardComponent {
  _movie: Movie;

  constructor( private router: Router ) { }

  // intercept movie by setter to set default poster if not available
  @Input()
  set movie(value: Movie) {
    if (value.Poster === 'N/A') {
      value.Poster = '../../assets/defaultPoster.jpg';
    }
    this._movie = value;
  }

  get movie() {
    return this._movie;
  }

  viewMovie(imdbID: string) {
    this.router.navigate(['/movieDetail', imdbID]);
  }
}
