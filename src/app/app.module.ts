import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MovieAppMaterialModule } from './movie-app-material.module';

import { AppComponent } from './app.component';
import { SearchBarComponent } from './search-bar.component';
import { MovieDetailsComponent } from './movie-details.component';
import { MovieListComponent } from './movie-list.component';

import { SearchService } from './search.service';
import { EmitterService } from './emitter.service';


@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    MovieDetailsComponent,
    MovieListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MovieAppMaterialModule
  ],
  providers: [ SearchService, EmitterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
