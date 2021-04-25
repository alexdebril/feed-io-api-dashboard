import { Result } from './Result';

export class ResultsApi {
  url: string;

  constructor(url: string) {
    this.url = url;
  }

  list(slug: string): Result[] {
    const results: Result[] = [];
    const request = {
      query: {
        slug
      },
      options: {
        start: 0,
        limit: 20
      }
    };
    fetch(`${this.url}/results`, {
      referrerPolicy: 'no-referrer',
      method: 'post',
      body: JSON.stringify(request)
    }).then(value => {
      return value.json();
    }).then(json => {
      for (const element of json.data.results) {
        const result = new Result(element.eventDate, element.statusCode, element.itemCount, element.duration);
        results.push(result);
      }
    });
    return results;
  }
}
