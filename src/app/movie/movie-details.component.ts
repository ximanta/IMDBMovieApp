import { Component, OnInit} from '@angular/core';
import { MovieService } from './movie.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  movieDetails: any;

  constructor(
    private movieService: MovieService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
    ) { }

  ngOnInit() {
     const imdbId = this.route.snapshot.params['imdbId'];
     this.movieService.viewMovie(imdbId)
    .subscribe((movieDetails: any) => {
      this.movieDetails = movieDetails;
    });
  }

  goBack() {
    this.location.back();
  }

}
