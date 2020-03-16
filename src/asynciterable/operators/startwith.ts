import { AsyncIterableX } from '../asynciterablex';
import { MonoTypeOperatorAsyncFunction } from '../../interfaces';
import { wrapWithAbort } from './withabort';

export class StartWithAsyncIterable<TSource> extends AsyncIterableX<TSource> {
  private _source: AsyncIterable<TSource>;
  private _args: TSource[];

  constructor(source: AsyncIterable<TSource>, args: TSource[]) {
    super();
    this._source = source;
    this._args = args;
  }

  async *[Symbol.asyncIterator](signal?: AbortSignal) {
    for (const x of this._args) {
      yield x;
    }
    for await (const item of wrapWithAbort(this._source, signal)) {
      yield item;
    }
  }
}

export function startWith<TSource>(...args: TSource[]): MonoTypeOperatorAsyncFunction<TSource> {
  return function startWithOperatorFunction(
    source: AsyncIterable<TSource>
  ): AsyncIterableX<TSource> {
    return new StartWithAsyncIterable<TSource>(source, args);
  };
}
