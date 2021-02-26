import { Item } from '../item';

export interface Subscriber {
    notify(item: Item): void;
}
