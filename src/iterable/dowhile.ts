import { IterableX } from './iterablex';
import { concatStatic } from './concat';
import { _while } from './while';

/**
 * Generates an iterable sequence by repeating a source sequence as long as the given loop postcondition holds.
 * @param {Iterable<T>} source Source sequence to repeat while the condition evaluates true.
 * @param {function(): boolean} condition Loop condition.
 * @return {Iterable<T>} Sequence generated by repeating the given sequence until the condition evaluates to false.
 */
export function doWhile<TSource>(
  source: Iterable<TSource>,
  condition: () => boolean
): IterableX<TSource> {
  return concatStatic(source, _while(condition, source));
}