export class Feed {

  constructor(
    public title: string,
    public url: string,
    public slug: string,
    public language: string | undefined,
    public status: string | undefined,
    public lastModified: Date | undefined,
    public nextUpdate: Date | undefined,
  ) {}
}
