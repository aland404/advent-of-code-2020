import { expect } from 'chai'
import { findTwoTuples, findThreeTuples } from '../../../src/exos/day_01/helperDayOne'
import 'mocha'

describe('day one part 1', () => {
  it('return 2 mathing tuples', () => {
    const data = [1721, 979, 366, 299, 675, 1456]
    const tuples = findTwoTuples(data)
    expect(tuples).deep.equal([1721, 299])
  })
})

describe('day one part 2', () => {
  it('return 3 matching tuples', () => {
    const data = [1721, 979, 366, 299, 675, 1456]
    const tuples = findThreeTuples(data)
    expect(tuples).deep.equal([979, 366, 675])
  })
})
