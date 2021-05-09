import { Item } from './Item';

export class ItemsApi {
  url: string;

  constructor(url: string) {
    this.url = url;
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

  async getFromFeed(slug: string, start: number, limit: number): Promise<ItemResponse> {
    const request = {
      query: {
        slug
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
      for (const element of json.data.items) {
        const item = new Item(
          element.title,
          element.link,
          element.content,
          element.feed.slug,
          element.feed.title,
          element.lastModified
        );
        items.push(item);
      }
      count = json.data.count;
    });
    return new ItemResponse(items, count);
  }

}

export class ItemResponse {
  constructor(
    public items: Item[],
    public count: number) {}
}
