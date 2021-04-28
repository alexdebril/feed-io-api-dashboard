export class Feed {

  constructor(
    public title: string,
    public url: string,
    public slug: string,
    public language: string,
    public status: string,
    public lastModified: Date,
    public nextUpdate: Date,
  ) {}
}
