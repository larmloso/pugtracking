import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColumnOneComponent } from './layouts/column-one/column-one.component';
import { HeaderComponent } from './components/header/header.component';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';

// import { BrowserModule } from '@angular/platform-browser';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AlertModule } from 'ngx-alerts';


@NgModule({
  declarations: [ColumnOneComponent, HeaderComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,

    AlertModule.forRoot({maxMessages: 5, timeout: 4000, positionX: 'left'})

  ],
  exports: [
    ColumnOneComponent,
    HeaderComponent
  ]
})
export class SharedModule { }
