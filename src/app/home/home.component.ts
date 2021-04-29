import { Component, OnInit } from '@angular/core';
import {environment} from '../../environments/environment';
import {ItemsApi} from '../ItemsApi';
import {Item} from '../Item';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  apiUrl: string;
  items: Item[] = [];

  constructor() {
    this.apiUrl = environment.urlApi;
  }

  async ngOnInit(): Promise<void> {
    const api = new ItemsApi(this.apiUrl);
    const itemResponse = await api.list(0, 20);
    this.items = itemResponse.items;
  }

}
