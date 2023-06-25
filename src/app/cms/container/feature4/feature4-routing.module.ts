import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Feature4Component } from './feature4.component';

const routes: Routes = [{ path: '', component: Feature4Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Feature4RoutingModule { }
