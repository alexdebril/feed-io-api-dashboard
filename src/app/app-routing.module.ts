import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemsComponent } from './items/items.component';
import { FeedsComponent } from './feeds/feeds.component';

const routes: Routes = [
  { path: 'items', component: ItemsComponent },
  { path: 'feeds', component: FeedsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
