import { Component, Input } from '@angular/core';
import { EmitterService } from './emitter.service';

@Component({
  selector: 'search-bar',
  templateUrl: 'search-bar.component.html',
  styleUrls: ['search-bar.component.css']
})
export class SearchBarComponent {

  @Input()
  listId: string;

  movies: any[];

  constructor( private emitterService: EmitterService) { }

  searchMovie(movie: string) {
    this.emitterService.get(this.listId).emit(movie);
  };
}
