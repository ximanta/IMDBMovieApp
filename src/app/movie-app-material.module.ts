import { NgModule } from '@angular/core';
import {
    MdButtonModule,
    MdCardModule,
    MdMenuModule,
    MdToolbarModule,
    MdIconModule,
    MdInputModule,
    MdAutocompleteModule,
    MdGridListModule
} from '@angular/material';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
    imports: [
    MdButtonModule,
    MdMenuModule,
    MdCardModule,
    MdToolbarModule,
    MdIconModule,
    MdInputModule,
    MdGridListModule,
    MdAutocompleteModule,
    BrowserAnimationsModule
    ],
    exports: [
    MdButtonModule,
    MdMenuModule,
    MdCardModule,
    MdToolbarModule,
    MdIconModule,
    MdInputModule,
    MdGridListModule,
    MdAutocompleteModule,
    BrowserAnimationsModule
    ]
})
export class MovieAppMaterialModule { }
