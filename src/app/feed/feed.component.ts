import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { FeedsApi } from '../FeedsApi';
import { Feed } from '../Feed';
import {ItemsApi} from '../ItemsApi';
import {Item} from '../Item';
import {PageEvent} from '@angular/material/paginator';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  apiUrl: string;
  count: number;
  pageSize: number;
  pageIndex: number;
  searchToken: string;
  feed: Feed | undefined;
  items: Item[] = [];

  constructor(private route: ActivatedRoute) {
    this.apiUrl = environment.urlApi;
    this.count = 0;
    this.pageIndex = 0;
    this.pageSize = 20;
    this.searchToken = '';
  }

  async ngOnInit(): Promise<void> {
    await this.getFeed();
  }

  async paginate(event: PageEvent): Promise<void> {
    this.pageIndex = event.pageIndex;
    return this.search();
  }

  async getFeed(): Promise<void> {
    const api = new FeedsApi(this.apiUrl);
    const slug = this.route.snapshot.paramMap.get('slug');
    if (typeof slug === 'string') {
      const response = await api.findOne(slug);
      this.feed = response.feeds[0];
      await this.getItems(this.feed, '', this.pageIndex, this.pageSize);
    }
  }

  async getItems(feed: Feed, search: string, start: number, limit: number): Promise<void> {
    const api = new ItemsApi(this.apiUrl);
    const response = await api.getFromFeed(feed.slug, search, start, limit);
    this.items = response.items;
    this.count = response.count;
  }

  async search(): Promise<void> {
    if (this.feed) {
      return this.getItems(this.feed, this.searchToken, this.pageIndex * this.pageSize, this.pageSize);
    }
  }

  async display(item: Item): Promise<void> {
    const api = new ItemsApi(this.apiUrl);
    await api.getContent(item);
  }

}
