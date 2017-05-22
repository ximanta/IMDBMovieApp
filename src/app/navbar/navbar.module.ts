import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieAppMaterialModule } from '../movie-app-material.module';
import { SearchModule } from '../search/search.module';

import { NavbarComponent } from './navbar.component';


@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    MovieAppMaterialModule,
    SearchModule
  ],
  exports: [ NavbarComponent ]
})
export class NavbarModule { }
