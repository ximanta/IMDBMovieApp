import { Component, Input } from '@angular/core';
import { MovieService } from '../movie/movie.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: 'search-bar.component.html',
  styleUrls: ['search-bar.component.css']
})
export class SearchBarComponent {

  movies: any;

  constructor(
    private movieService: MovieService,
    private router: Router
          ) { }

  searchMovie(movieName: string) {
    if (movieName.trim() !== '') {
      this.router.navigate(['movieList', movieName]);
    }
  };

  // suggestMovie(keywords: string) {
  //   if (keywords.trim() !== '') {
  //     this.movieService.searchMovie(keywords).subscribe((movies) => {
  //       this.movies = movies;
  //       console.log(movies);
  //     });
  //   }
  // }

}
