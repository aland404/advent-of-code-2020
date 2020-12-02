import { PUZZLE_INPUT } from './inputs'
import { findTwoTuples, findThreeTuples } from './exos/day_one'

function resolveExoDayOne() {
  console.info('__Day One__')
  const [twoTuples1, twoTuples2] = findTwoTuples(PUZZLE_INPUT)
  console.log('part 1:', twoTuples1 * twoTuples2)

  const [threeTuples1, threeTuples2, threeTuples3] = findThreeTuples(PUZZLE_INPUT)
  console.log('part 2:', threeTuples1 * threeTuples2 * threeTuples3)
}

resolveExoDayOne()
