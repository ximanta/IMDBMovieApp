import { Component, Input } from '@angular/core';
import { SearchService } from './search.service';
import { Movie } from './movie';

@Component({
  selector: 'movie-details',
  templateUrl: 'movie-details.component.html',
  styleUrls: ['movie-details.component.css']
})
export class MovieDetailsComponent {

  @Input()
  movie: any;
}
