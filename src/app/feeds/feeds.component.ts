import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { FeedsApi } from '../FeedsApi';
import { Feed } from '../Feed';

@Component({
  selector: 'app-feeds',
  templateUrl: './feeds.component.html',
  styleUrls: ['./feeds.component.css']
})
export class FeedsComponent implements OnInit {

  apiUrl: string;
  feeds: Feed[] = [];
  selectedFeed?: Feed;

  constructor() {
    this.apiUrl = environment.urlApi;
  }

  ngOnInit(): void {
    const api = new FeedsApi(this.apiUrl);
    this.feeds = api.list(0, 10);
  }

  select(feed: Feed): void {
    this.selectedFeed = feed;
  }

}
