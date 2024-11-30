import { chunk } from '../src'

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
})
