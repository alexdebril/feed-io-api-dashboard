import { Feed } from "./Feed";

export class Item {
    constructor(
      public title: string,
      public link: string,
      public content: string,
      public lastModified: Date,
      public feed: Feed
    ) {
    }
}
