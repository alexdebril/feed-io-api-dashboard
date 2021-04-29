import { Component, OnInit } from '@angular/core';
import { LiveItem } from '../LiveItem';
import { ItemReader } from './reader';
import { Subscriber } from './subscriber';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit, Subscriber {

  items: LiveItem[] = [];
  websocketUrl: string;

  constructor() {
    this.websocketUrl = environment.urlWebsocket;
  }

  ngOnInit(): void {
    const reader = new ItemReader(this.websocketUrl);
    reader.connect();
    reader.listen(this);
  }

  notify(item: LiveItem): void {
    this.items.push(item);
  }

}
