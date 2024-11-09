import { getShallowDiff } from './get-shallow-diff'

describe('Util: getShallowObjectDiff', () => {
  it('should return an empty object when both objects are empty', () => {
    expect(getShallowDiff({}, {})).toEqual({})
  })

  it('should return an empty object when the reference object is empty', () => {
    expect(getShallowDiff({}, { a: 1, b: 2 })).toEqual({})
  })

  it('should return an empty object when the updated object is empty', () => {
    expect(getShallowDiff({ a: 1, b: 2 }, {})).toEqual({})
  })

  it('should return an empty object when there are no differences between reference and updated objects', () => {
    expect(getShallowDiff({ a: 1, b: '2' }, { a: 1, b: '2' })).toEqual({})
  })

  it('should return an empty object when object properties have the same reference', () => {
    const nested = { x: 1 }
    expect(getShallowDiff({ a: nested }, { a: nested })).toEqual({})
  })

  it('should return all differences when all values are different', () => {
    expect(
      getShallowDiff({ a: 1, b: 2, c: undefined }, {
        a: 10,
        b: '2',
        c: null,
      } as any),
    ).toEqual({ a: 10, b: '2', c: null })
  })

  it('should return only changed values and ignore unchanged ones', () => {
    expect(
      getShallowDiff({ a: 1, b: 2, c: undefined, d: null }, {
        c: 2,
      } as any),
    ).toEqual({ c: 2 })
  })

  it('should ignore extra keys in updated that are not present in reference', () => {
    expect(getShallowDiff({ a: 1, b: 2 }, { a: 1, b: 2, c: 3 } as any)).toEqual(
      {},
    )
  })

  it('should differentiate between null and undefined values', () => {
    expect(
      getShallowDiff({ a: null, b: undefined }, {
        a: undefined,
        b: null,
      } as any),
    ).toEqual({ a: undefined, b: null })
  })
})
