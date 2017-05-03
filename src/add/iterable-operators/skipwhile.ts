import { IterableX } from '../../iterable';
import { skipWhile } from '../../iterable/skipwhile';

export function skipWhileProto<TSource>(
    this: IterableX<TSource>,
    predicate: (value: TSource, index: number) => boolean): IterableX<TSource> {
  return new IterableX(skipWhile(this, predicate));
}

IterableX.prototype.skipWhile = skipWhileProto;

declare module '../../iterable' {
  interface IterableX<T> {
    skipWhile: typeof skipWhileProto;
  }
}