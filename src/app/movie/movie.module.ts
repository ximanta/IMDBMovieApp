import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieAppMaterialModule } from '../movie-app-material.module';

import { MovieDetailsComponent } from './movie-details.component';
import { MovieListComponent } from './movie-list.component';

import { MovieService } from './movie.service';


@NgModule({
  declarations: [
    MovieDetailsComponent,
    MovieListComponent
  ],
  imports: [
    CommonModule,
    MovieAppMaterialModule
  ],
  providers: [ MovieService ],
  exports: [ MovieListComponent ]
})
export class MovieModule { }
