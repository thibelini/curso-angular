import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { PhotoListModule } from './photo-list/photo-list.module';
import { PhotoModule } from './photo/photo.module';
import { PhotoFormModule } from './photo-form/photo-form.module';


@NgModule({
  imports: [
    PhotoModule,
    PhotoFormModule,
    PhotoListModule,
    HttpClientModule,
    CommonModule
  ]
})

export class PhotosModule { }
