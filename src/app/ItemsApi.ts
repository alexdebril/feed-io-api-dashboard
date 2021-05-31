import { Feed } from './Feed';
import { Item } from './Item';

export class ItemsApi {
  url: string;

  constructor(url: string) {
    this.url = url;
  }

  async search(search: string, language: string, start: number, limit: number): Promise<ItemResponse> {
    const request = {
      query: {
        content: search,
        language
      },
      options: {
        start,
        limit
      }
    };
    return this.fetchResult(request);
  }

  async list(start: number, limit: number): Promise<ItemResponse> {
    const request = {
      options: {
        start,
        limit
      }
    };
    return this.fetchResult(request);
  }

  async getFromFeed(slug: string, search: string, start: number, limit: number): Promise<ItemResponse> {
    const request = {
      query: {
        slug,
        content: search
      },
      options: {
        start,
        limit
      }
    };
    return this.fetchResult(request);
  }

  async fetchResult(request: any): Promise<ItemResponse> {
    const items: Item[] = [];
    let count = 0;
    await fetch(`${this.url}/items`, {
      referrerPolicy: 'no-referrer',
      method: 'post',
      body: JSON.stringify(request)
    }).then(value => {
      return value.json();
    }).then(json => {
      if (json.data.items != null) {
        for (const element of json.data.items) {
          const feed = new Feed(
            element.feed.title,
            element.feed.url,
            element.feed.slug,
            undefined, undefined, undefined, undefined
          );
          const item = new Item(
            element.title,
            element.link,
            element.content,
            element.lastModified,
            element.Id,
            element.feed = feed
          );
          items.push(item);
        }
        count = json.data.count;
      }
    });
    return new ItemResponse(items, count);
  }

  async getContent(item: Item): Promise<void> {
    await fetch(`${this.url}/items?id=${item.id}`, {
      referrerPolicy: 'no-referrer',
    }).then(value => {
      return value.json();
    }).then(json => {
      if (json.data.item != null) {
        item.content = json.data.item.content;
        console.log(json.data.item);
      }
    });
  }

}

export class ItemResponse {
  constructor(
    public items: Item[],
    public count: number) {}
}
