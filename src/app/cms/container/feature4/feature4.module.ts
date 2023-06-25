import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Feature4RoutingModule } from './feature4-routing.module';
import { Feature4Component } from './feature4.component';


@NgModule({
  declarations: [
    Feature4Component
  ],
  imports: [
    CommonModule,
    Feature4RoutingModule
  ]
})
export class Feature4Module { }
