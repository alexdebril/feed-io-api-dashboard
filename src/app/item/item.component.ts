import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { ItemReader } from './reader';
import { Subscriber } from './subscriber';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit, Subscriber {

  items: Item[] = [];

  constructor() { }

  ngOnInit(): void {
    const reader = new ItemReader('//ws.localhost');
    reader.connect();
    reader.listen(this);
  }

  notify(item: Item): void {
    this.items.push(item);
  }

}
