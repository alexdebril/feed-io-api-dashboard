import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { FeedsApi } from '../FeedsApi';
import { Feed } from '../Feed';
import {ItemsApi} from '../ItemsApi';
import {Item} from '../Item';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  apiUrl: string;
  feed: Feed;

  constructor(private route: ActivatedRoute) {
    this.apiUrl = environment.urlApi;
    this.feed = new Feed('', '', '', undefined, undefined, undefined, undefined);
  }

  ngOnInit(): void {
    this.getResults();
  }

  async getResults(): Promise<void> {
    const api = new FeedsApi(this.apiUrl);
    const slug = this.route.snapshot.paramMap.get('slug');
    if (typeof slug === 'string') {
      const response = await api.findOne(slug);
      this.feed = response.feeds[0];
    }
  }

}
