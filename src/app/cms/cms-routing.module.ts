import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CmsComponent } from './cms.component';

const routes: Routes = [{ path: '', component: CmsComponent }, { path: 'feature1', loadChildren: () => import('./container/feature1/feature1.module').then(m => m.Feature1Module) }, { path: 'feature2', loadChildren: () => import('./container/feature2/feature2.module').then(m => m.Feature2Module) }, { path: 'feature3', loadChildren: () => import('./container/feature3/feature3.module').then(m => m.Feature3Module) }, { path: 'feature4', loadChildren: () => import('./container/feature4/feature4.module').then(m => m.Feature4Module) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CmsRoutingModule { }
