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

  if (!Array.isArray(array)) {
    throw new Error('Input must be an array.')
  }

  return Array.from({ length: Math.ceil(array.length / size) }, (_, index) =>
    array.slice(index * size, index * size + size)
  )
}

/**
 * Creates an array with all falsey values removed.
 * The values false, null, 0, "", undefined, and NaN are falsey.
 *
 * @example
 *
 * compact(["a", "b", false])
 * // => ["a", "b"]
 *
 * compact(["a", false, null, 0, "", undefined, NaN, "b"])
 * // => ["a", "b"]
 */
export function compact<T>(array: Array<T>): Array<T> {
  if (!Array.isArray(array)) {
    throw new Error('Input must be an array.')
  }

  return array.filter((el) => el)
}
