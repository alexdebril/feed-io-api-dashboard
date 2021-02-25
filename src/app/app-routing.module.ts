import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemComponent } from './item/item.component';
import { FeedsComponent } from './feeds/feeds.component';

const routes: Routes = [
  { path: 'item', component: ItemComponent },
  { path: 'feeds', component: FeedsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
