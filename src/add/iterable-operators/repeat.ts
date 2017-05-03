import { IterableX } from '../../iterable';
import { repeat } from '../../iterable/repeat';

export function repeatProto<TSource>(
    this: IterableX<TSource>,
    count: number = -1): IterableX<TSource> {
  return new IterableX(repeat(this, count));
}

IterableX.prototype.repeat = repeatProto;

declare module '../../iterable' {
  interface IterableX<T> {
    repeat: typeof repeatProto;
  }
}