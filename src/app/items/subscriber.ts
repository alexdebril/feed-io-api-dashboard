import { LiveItem } from '../LiveItem';

export interface Subscriber {
    notify(item: LiveItem): void;
}
