import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemsComponent } from './items/items.component';
import { FeedsComponent } from './feeds/feeds.component';
import {ResultsComponent} from './results/results.component';

const routes: Routes = [
  { path: 'items', component: ItemsComponent },
  { path: 'feeds', component: FeedsComponent },
  { path: 'results/:slug', component: ResultsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
