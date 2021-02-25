import { Item } from "../item";
import { Subscriber } from "./subscriber";

export class ItemReader {
    url : string;
    evtSource!: EventSource;
    constructor(url: string) {
        this.url = url;
    }

    connect() {
        this.evtSource = new EventSource(this.url);
        this.evtSource.onopen = function(status) {
            console.log(status);
        }
        this.evtSource.onerror = function(status) {
            console.log("error detected");
            console.log(status);
        }
    }

    listen(subscriber: Subscriber) {
        this.evtSource.addEventListener("item", function(event: Event) {
            if (event instanceof MessageEvent) {
                console.log("new item")
                console.log(event.data)
                const jsonItem = JSON.parse(event.data);
                const item = new Item(jsonItem.title, jsonItem.feed_url);
                subscriber.notify(item);
            }
          });
    }


}