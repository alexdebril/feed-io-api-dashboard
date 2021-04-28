import { Feed } from './Feed';

export class FeedsApi {
  url: string;

  constructor(url: string) {
    this.url = url;
  }

  async list(start: number, limit: number): Promise<FeedResponse> {
    const feeds: Feed[] = [];
    let count = 0;
    const request = {
      options: {
        start,
        limit
      }
    };
    await fetch(`${this.url}/feeds`, {
      referrerPolicy: 'no-referrer',
      method: 'post',
      body: JSON.stringify(request)
    }).then(value => {
      return value.json();
    }).then(json => {
      for (const element of json.data.feeds) {
        const feed = new Feed(
          element.title,
          element.url,
          element.slug,
          element.language,
          element.status,
          element.lastModified,
          element.nextUpdate
        );
        feeds.push(feed);
      }
      console.log(json.data.count);
      count = json.data.count;
    });
    return new FeedResponse(feeds, count);
  }
}

export class FeedResponse {
  constructor(
    public feeds: Feed[],
    public count: number) {}
}
