import { expect } from 'chai'
import { countNumberOfThree } from '../../../src/exos/day_03/helperDayThree'
import 'mocha'

const input = [
  '..##.......',
  '#...#...#..',
  '.#....#..#.',
  '..#.#...#.#',
  '.#...##..#.',
  '..#.##.....',
  '.#.#.#....#',
  '.#........#',
  '#.##...#...',
  '#...##....#',
  '.#..#...#.#',
]

describe('day three part 1', () => {
  it('Should return 7, the number of trees found', () => {
    const nbOfTrees = countNumberOfThree(input, 3, 1)
    expect(nbOfTrees).equal(7)
  })
})

describe('day three part 2', () => {
  it('Should return 2, the number of trees found', () => {
    const nbOfTrees = countNumberOfThree(input, 1, 1)
    expect(nbOfTrees).equal(2)
  })
  it('Should return 7, the number of trees found', () => {
    const nbOfTrees = countNumberOfThree(input, 3, 1)
    expect(nbOfTrees).equal(7)
  })
  it('Should return 3, the number of trees found', () => {
    const nbOfTrees = countNumberOfThree(input, 5, 1)
    expect(nbOfTrees).equal(3)
  })
  it('Should return 4, the number of trees found', () => {
    const nbOfTrees = countNumberOfThree(input, 7, 1)
    expect(nbOfTrees).equal(4)
  })
  it('Should return 2, the number of trees found', () => {
    const nbOfTrees = countNumberOfThree(input, 1, 2)
    expect(nbOfTrees).equal(2)
  })
})
