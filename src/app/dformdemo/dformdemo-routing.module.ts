import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DformdemoComponent } from './dformdemo.component';

const routes: Routes = [
  {
    path: '',
    component: DformdemoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DformdemoRoutingModule {}
