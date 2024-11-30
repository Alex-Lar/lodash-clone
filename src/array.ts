/**
 * Creates an array of elements split into groups the length of size.
 * If array can't be split evenly, the final chunk will be the remaining elements.
 *
 * @example
 *
 * chunk(['a', 'b', 'c']);
 * // => [['a'], ['b'], ['c']]
 *
 * chunk(['a', 'b', 'c', 'd'], 2);
 * // => [['a', 'b'] ['c', 'd']]
 */
export function chunk<T>(array: Array<T>, size: number = 1): Array<Array<T>> {
  if (size < 1) {
    throw new Error('Size must be a positive integer.')
  }

  return Array.from({ length: Math.ceil(array.length / size) }, (_, index) =>
    array.slice(index * size, index * size + size)
  )
}
