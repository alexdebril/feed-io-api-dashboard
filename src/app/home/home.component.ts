import { Component, OnInit } from '@angular/core';
import {environment} from '../../environments/environment';
import {ItemsApi} from '../ItemsApi';
import {Item} from '../Item';
import {PageEvent} from '@angular/material/paginator';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  apiUrl: string;
  items: Item[] = [];
  count: number;
  pageSize: number;
  pageIndex: number;
  searchToken: string;
  language: string;

  constructor() {
    this.apiUrl = environment.urlApi;
    this.count = 0;
    this.pageIndex = 0;
    this.pageSize = 20;
    this.searchToken = '';
    this.language = 'en';
  }

  async ngOnInit(): Promise<void> {
    return this.search();
  }

  async paginate(event: PageEvent): Promise<void> {
    this.pageIndex = event.pageIndex;
    return this.search();
  }

  async search(): Promise<void> {
    const api = new ItemsApi(this.apiUrl);
    const itemResponse = (this.searchToken !== '')
      ? await api.search(this.searchToken, this.language, this.pageIndex * this.pageSize, this.pageSize)
      : await api.list(this.pageIndex, this.pageSize);
    this.items = itemResponse.items;
    this.count = itemResponse.count;
  }

  async display(item: Item): Promise<void> {
    const api = new ItemsApi(this.apiUrl);
    await api.getContent(item);
  }

}
