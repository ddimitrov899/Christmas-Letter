import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import 'materialize-css';
import { MaterializeModule } from 'angular2-materialize';

import { StatsComponent } from './stats.component';

import { StatsService } from './stats.service';
import { StatsActions } from './../store/stats/stats-actions';

@NgModule({
  declarations: [
    StatsComponent
  ],
  imports: [
CommonModule,
  FormsModule,
  MaterializeModule
  ],
  exports: [
    StatsComponent,
  ],
  providers: [
    StatsService,
    StatsActions
  ],
})
export class StatsModule { }
