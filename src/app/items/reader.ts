import { LiveItem } from '../LiveItem';
import { Subscriber } from './subscriber';

export class ItemReader {
    url: string;
    socket!: WebSocket;
    constructor(url: string) {
        this.url = url;
    }

    connect(): void {
        this.socket = new WebSocket(this.url);
        this.socket.onopen = status => {
          this.socket.send('');
          console.log(status);
        };
        this.socket.onerror = status => {
            console.log('error detected');
            console.log(status);
        };
    }

    listen(subscriber: Subscriber): void {
        this.socket.onmessage = evt => {
          if (evt instanceof MessageEvent) {
            console.log('new item');
            console.log(evt.data);
            const jsonItem = JSON.parse(evt.data);
            const item = new LiveItem(jsonItem.title, jsonItem.url, jsonItem.feed_name, jsonItem.feed_slug, jsonItem.fetched_time);
            subscriber.notify(item);
          }
          this.socket.send('');
        };
    }
}
