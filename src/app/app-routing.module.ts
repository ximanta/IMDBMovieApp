import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MovieListComponent } from './movie/movie-list.component';
import { MovieDetailsComponent } from './movie/movie-details.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'movieList/batman', pathMatch: 'full'},
  { path: 'movieList/:movieName', component: MovieListComponent },
  { path: 'movieDetail/:imdbId', component: MovieDetailsComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
