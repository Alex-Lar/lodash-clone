import { chunk, compact, concat } from '../src'

describe('Array methods tests', () => {
  test('chunk test', () => {
    expect(chunk(['a', 'b', 'c'])).toEqual(expect.arrayContaining([['a'], ['b'], ['c']]))

    expect(chunk(['a', 'b', 'c'], 2)).toEqual(expect.arrayContaining([['a', 'b'], ['c']]))

    expect(chunk(['a', 'b', 'c', 'd'], 2)).toEqual(
      expect.arrayContaining([
        ['a', 'b'],
        ['c', 'd'],
      ])
    )

    expect(chunk(['a', 'b', 'c', 'd'], 4)).toEqual(expect.arrayContaining([['a', 'b', 'c', 'd']]))
  })

  test('compact test', () => {
    expect(compact(['a', 'b', false])).toEqual(expect.arrayContaining(['a', 'b']))
    expect(compact(['a', false, null, 0, '', undefined, NaN, 'b'])).toEqual(
      expect.arrayContaining(['a', 'b'])
    )
  })

  test('concat test', () => {
    const array = [1]
    const array1 = [1, 5, [10]]

    expect(concat(array, 2, [3], [[4]])).toEqual(expect.arrayContaining([1, 2, 3, [4]]))
    expect(concat(array, [5], [[3], [[4]]])).toEqual(expect.arrayContaining([1, 5, [3], [[4]]]))

    expect(concat(array1, 5, [[3], [[4]]])).toEqual(
      expect.arrayContaining([1, 5, [10], 5, [3], [[4]]])
    )

    expect(array).toEqual([1])
    expect(array1).toEqual([1, 5, [10]])
  })
})
