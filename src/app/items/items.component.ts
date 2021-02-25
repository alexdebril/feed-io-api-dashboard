import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { ItemReader } from '../items/reader';
import { Subscriber } from '../items/subscriber';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit, Subscriber {

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
