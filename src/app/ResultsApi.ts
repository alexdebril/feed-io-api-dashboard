import { Result } from './Result';

export class ResultsApi {
  url: string;

  constructor(url: string) {
    this.url = url;
  }

  list(slug: string): Result[] {
    const results: Result[] = [];
    fetch(`${this.url}/result/list/${slug}`).then(value => {
      return value.json();
    }).then(json => {
      for (const element of json) {
        const result = new Result(element.statusCode, element.itemCount, element.duration);
        results.push(result);
      }
    });
    return results;
  }
}
