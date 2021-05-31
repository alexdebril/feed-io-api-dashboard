import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { ActivatedRoute } from '@angular/router';
import { FeedsApi } from '../FeedsApi';
import { Feed } from '../Feed';
import {Item} from '../Item';
import {PageEvent} from '@angular/material/paginator';

@Component({
  selector: 'app-feeds',
  templateUrl: './feeds.component.html',
  styleUrls: ['./feeds.component.css']
})
export class FeedsComponent implements OnInit {

  apiUrl: string;
  count: number;
  pageSize: number;
  pageIndex: number;
  pages: number[] = [];
  feeds: Feed[] = [];
  items: Item[] = [];
  selectedFeed?: Feed;

  constructor(private route: ActivatedRoute) {
    this.apiUrl = environment.urlApi;
    this.count = 0;
    this.pageIndex = 0;
    this.pageSize = 20;
  }

  async ngOnInit(): Promise<void> {
    return this.load();
  }

  async paginate(pageEvent: PageEvent): Promise<void> {
    this.pageIndex = pageEvent.pageIndex;
    return this.load();
  }

  async load(): Promise<void> {
    const api = new FeedsApi(this.apiUrl);
    const feedResponse = await api.list(this.pageIndex * this.pageSize, this.pageSize);
    this.feeds = feedResponse.feeds;
    this.count = feedResponse.count;
  }

}
