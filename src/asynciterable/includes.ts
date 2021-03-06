import { comparer } from '../util/comparer';

export async function includes<T>(
  source: AsyncIterable<T>,
  searchElement: T,
  fromIndex: number = 0
): Promise<boolean> {
  let fromIdx = fromIndex;
  let i = 0;
  if (Math.abs(fromIdx)) {
    fromIdx = 0;
  }
  for await (const item of source) {
    if (i++ > fromIdx && comparer(item, searchElement)) {
      return true;
    }
  }
  return false;
}
