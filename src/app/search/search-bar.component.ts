import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie/movie.service';
import { Router} from '@angular/router';


@Component({
  selector: 'app-search-bar',
  templateUrl: 'search-bar.component.html',
  styleUrls: ['search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  movies: any;

  constructor(
    private movieService: MovieService,
    private router: Router ) { }

  ngOnInit() {
    this.movieService.searchTerms$
    .switchMap((searchTerms) => this.movieService.getMovies(searchTerms))
    .subscribe((movies) => this.movies = movies);
  }

  searchMovies(movieName: string) {
    if (movieName.trim() !== '') {
      this.router.navigate(['movieList', movieName]);
    }
  };

  suggestMovie(keywords: string) {
    if (keywords.trim() !== '') {
      this.movieService.suggestMovie(keywords);
    }
  }

}
