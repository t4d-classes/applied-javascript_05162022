import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { SharedModule } from '../shared/shared.module';

import { ColorHomeComponent } from './components/color-home/color-home.component';
import { ColorListComponent } from './components/color-list/color-list.component';
import { ColorFormComponent } from './components/color-form/color-form.component';



@NgModule({
  declarations: [
    ColorHomeComponent,
    ColorListComponent,
    ColorFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
  ],
  exports: [
    ColorHomeComponent,
  ]
})
export class ColorToolModule { }
