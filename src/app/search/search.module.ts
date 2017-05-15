import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieAppMaterialModule } from '../movie-app-material.module';

import { SearchBarComponent } from './search-bar.component';


@NgModule({
  declarations: [
    SearchBarComponent
  ],
  imports: [
    CommonModule,
    MovieAppMaterialModule
  ],
  exports: [ SearchBarComponent ]
})
export class SearchModule { }
