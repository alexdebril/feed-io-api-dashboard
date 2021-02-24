import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { ItemReader } from './reader';
import { Subscriber } from './subscriber';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit, Subscriber {

  items: Item[] = [];
  websocketUrl: string;

  constructor() {
    this.websocketUrl = environment.urlWebsocket
  }

  ngOnInit(): void {
    const reader = new ItemReader(this.websocketUrl);
    reader.connect();
    reader.listen(this);
  }

  notify(item: Item): void {
    this.items.push(item);
  }

}
