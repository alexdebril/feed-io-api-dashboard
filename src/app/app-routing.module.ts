import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemsComponent } from './items/items.component';
import { FeedComponent } from './feed/feed.component';
import { FeedsComponent } from './feeds/feeds.component';
import {ResultsComponent} from './results/results.component';
import {HomeComponent} from './home/home.component';
import {NotfoundComponent} from './notfound/notfound.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  { path: 'live', component: ItemsComponent },
  { path: 'feeds/:page', component: FeedsComponent },
  { path: 'feed/:slug', component: FeedComponent },
  { path: 'results/:slug', component: ResultsComponent},
  {path: '**', component: NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
