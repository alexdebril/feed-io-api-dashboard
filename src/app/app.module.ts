import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { AppRoutingModule } from './app-routing.module';
import { FeedsComponent } from './feeds/feeds.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    FeedsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
