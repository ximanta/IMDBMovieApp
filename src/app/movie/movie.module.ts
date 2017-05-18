import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieAppMaterialModule } from '../movie-app-material.module';

import { MovieCardComponent } from './movie-card.component';
import { MovieListComponent } from './movie-list.component';
import { MovieDetailsComponent } from './movie-details.component';


import { MovieService } from './movie.service';

@NgModule({
  declarations: [
    MovieCardComponent,
    MovieListComponent,
    MovieDetailsComponent
  ],
  imports: [
    CommonModule,
    MovieAppMaterialModule
  ],
  providers: [ MovieService ],
  exports: [ MovieListComponent ]
})
export class MovieModule { }
