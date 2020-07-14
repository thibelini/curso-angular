import { SearchComponent } from './search/search.compoment';
import { PhotoModule } from './../photo/photo.module';
import { NgModule } from '@angular/core';

import { LoadButtonComponent } from './load-button/load-button.component';
import { PhotosComponent } from './photos/photos.component';
import { PhotoListComponent } from './photo-list.component';
import { FilterByDescription } from './filter-by-description.pipe';
import { CommonModule } from '@angular/common';
import { CardModule } from './../../shared/components/card/card.module';
import { DarkOnHoverModule } from './../../shared/directives/darken-on-hover/darken-on-hover.module';

@NgModule({
  declarations: [
    PhotoListComponent,
    PhotosComponent,
    LoadButtonComponent,
    FilterByDescription,
    SearchComponent
  ],
  imports: [
    CommonModule,
    PhotoModule,
    CardModule,
    DarkOnHoverModule
  ]
})
export class PhotoListModule{}

