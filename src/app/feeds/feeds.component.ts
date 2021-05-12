import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { ActivatedRoute } from '@angular/router';
import { FeedsApi } from '../FeedsApi';
import { Feed } from '../Feed';
import {Item} from '../Item';

@Component({
  selector: 'app-feeds',
  templateUrl: './feeds.component.html',
  styleUrls: ['./feeds.component.css']
})
export class FeedsComponent implements OnInit {

  apiUrl: string;
  pages: number[] = [];
  feeds: Feed[] = [];
  items: Item[] = [];
  selectedFeed?: Feed;
  defaultLimit: number;

  constructor(private route: ActivatedRoute) {
    this.apiUrl = environment.urlApi;
    this.defaultLimit = 10;
  }

  async ngOnInit(): Promise<void> {
    this.route.paramMap.subscribe(params => {
      const page = parseInt(params.get('page') as string, 10);
      this.load(page);
    });
  }

  async load(page: number): Promise<void> {
    const api = new FeedsApi(this.apiUrl);
    const start = (page - 1) * this.defaultLimit;
    const feedResponse = await api.list(start, this.defaultLimit);
    this.feeds = feedResponse.feeds;
    this.buildPager(feedResponse.count);
  }

  buildPager(count: number): void {
    const n = Math.ceil(count / this.defaultLimit);
    this.pages = [];
    for (let i = 1; i <= n; i++) {
      this.pages.push(i);
    }
  }

}
