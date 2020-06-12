import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DformComponent } from './containers/dform/dform.component';

const routes: Routes = [
  {
    path: '',
    component: DformComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DformRoutingModule {}
