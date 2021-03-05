import { Feed } from './Feed';

export class FeedsApi {
  url: string;

  constructor(url: string) {
    this.url = url;
  }

  list(start: number, limit: number): Feed[] {
    const feeds: Feed[] = [];
    fetch(`${this.url}/feeds/list/${start}/${limit}`).then(value => {
      return value.json();
    }).then(json => {
      for (const element of json.feeds) {
        const feed = new Feed(element.title, element.url, element.slug, element.language, element.status);
        feeds.push(feed);
      }
    });
    return feeds;
  }
}
