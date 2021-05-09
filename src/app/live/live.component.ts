import { Component, OnInit } from '@angular/core';
import {Subscriber} from '../items/subscriber';
import {LiveItem} from '../LiveItem';
import {environment} from '../../environments/environment';
import {ItemReader} from '../items/reader';

@Component({
  selector: 'app-live',
  templateUrl: './live.component.html',
  styleUrls: ['./live.component.css']
})
export class LiveComponent implements OnInit, Subscriber {

  item: LiveItem;
  websocketUrl: string;

  constructor() {
    this.websocketUrl = environment.urlWebsocket;
    this.item = new LiveItem('loading last items ...', '', '', '', '');
  }

  ngOnInit(): void {
    const reader = new ItemReader(this.websocketUrl);
    reader.connect();
    reader.listen(this);
  }

  notify(item: LiveItem): void {
    this.item = item;
  }

}
