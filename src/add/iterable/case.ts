import { IterableX } from '../../iterable';
import { _case as caseStatic } from '../../iterable/case';

export function _case<TSource, TResult>(
    fn: () => TSource,
    sources: Map<TSource, Iterable<TResult>>,
    defaultSource?: Iterable<TResult>): IterableX<TResult> {
  return new IterableX(caseStatic(fn, sources, defaultSource));
}

IterableX.case = _case;

declare module '../../iterable' {
  namespace IterableX {
    function _case<TSource, TResult>(
      fn: () => TSource,
      sources: Map<TSource, Iterable<TResult>>,
      defaultSource?: Iterable<TResult>): IterableX<TResult>;
    export { _case as case }
  }
}