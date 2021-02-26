export class Feed {

  title: string;
  url: string;
  slug: string;
  language: string;
  status: string;

  constructor(title: string, url: string, slug: string, language: string, status: string) {
    this.title = title;
    this.url = url;
    this.slug = slug;
    this.language = language;
    this.status = status;
  }
}
