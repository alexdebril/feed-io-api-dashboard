import { LiveItem } from '../LiveItem';
import { Subscriber } from './subscriber';

export class ItemReader {
    url: string;
    evtSource!: EventSource;
    constructor(url: string) {
        this.url = url;
    }

    connect(): void {
        this.evtSource = new EventSource(this.url);
        this.evtSource.onopen = status => {
            console.log(status);
        };
        this.evtSource.onerror = status => {
            console.log('error detected');
            console.log(status);
        };
    }

    listen(subscriber: Subscriber): void {
        this.evtSource.addEventListener('item', (event: Event) => {
            if (event instanceof MessageEvent) {
                console.log('new item');
                console.log(event.data);
                const jsonItem = JSON.parse(event.data);
                const item = new LiveItem(jsonItem.title, jsonItem.url, jsonItem.feed_name, jsonItem.feed_slug, jsonItem.fetched_time);
                subscriber.notify(item);
            }
          });
    }

}
