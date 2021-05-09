export class Item {
    constructor(
      public title: string,
      public link: string,
      public content: string,
      public feedSlug: string,
      public feedTitle: string,
      public lastModified: Date
    ) {
    }
}
