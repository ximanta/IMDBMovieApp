import { NgModule } from '@angular/core';
import {
    MdButtonModule,
    MdCardModule,
    MdMenuModule,
    MdToolbarModule,
    MdIconModule,
    MdInputModule,
    MdAutocompleteModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MdGridListModule } from '@angular/material';

@NgModule({
    imports: [
    MdButtonModule,
    MdMenuModule,
    MdCardModule,
    MdToolbarModule,
    MdIconModule,
    MdInputModule,
    FlexLayoutModule,
    MdGridListModule,
    MdAutocompleteModule
    ],
    exports: [
    MdButtonModule,
    MdMenuModule,
    MdCardModule,
    MdToolbarModule,
    MdIconModule,
    MdInputModule,
    FlexLayoutModule,
    MdGridListModule,
    MdAutocompleteModule
    ]
})
export class MovieAppMaterialModule { }
