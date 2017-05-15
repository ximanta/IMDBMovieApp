import { Component, Input } from '@angular/core';
import { EmitterService } from '../shared/emitter.service';

@Component({
  selector: 'search-bar',
  templateUrl: 'search-bar.component.html',
  styleUrls: ['search-bar.component.css']
})
export class SearchBarComponent {

  @Input()
  listId: string;

  constructor( private emitterService: EmitterService) { }

  searchMovie(movieName: string) {
    this.emitterService.get(this.listId).emit(movieName);
  };
}
