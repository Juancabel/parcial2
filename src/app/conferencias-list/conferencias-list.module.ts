import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConferenciasListComponent } from './conferencias-list.component';
import { ConferenciasDetailComponent } from '../conferencias-detail/conferencias-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ConferenciasListComponent,ConferenciasDetailComponent],
  exports: [ConferenciasListComponent]
})
export class ConferenciasListModule { }
