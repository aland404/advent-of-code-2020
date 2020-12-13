import { PUZZLE_INPUT as PUZZLE_INPUT_DAY_ONE } from './exos/day_one/inputs'
import { PUZZLE_INPUT as PUZZLE_INPUT_DAY_TWO } from './exos/day_two/inputs'

import { findTwoTuples, findThreeTuples } from './exos/day_one/helperDayOne'
import { countValidPassword, isOldWayPasswordOk, isNewWayPasswordOk } from './exos/day_two/helperDayTwo'

function resolveExoDayOne() {
  console.info('__Day One__')
  const [twoTuples1, twoTuples2] = findTwoTuples(PUZZLE_INPUT_DAY_ONE)
  console.log('part 1:', twoTuples1 * twoTuples2)

  const [threeTuples1, threeTuples2, threeTuples3] = findThreeTuples(PUZZLE_INPUT_DAY_ONE)
  console.log('part 2:', threeTuples1 * threeTuples2 * threeTuples3)
}

function resolveExoDayTwo() {
  console.info('__Day Two__')
  console.log('part 1:', countValidPassword({
    inputs: PUZZLE_INPUT_DAY_TWO,
    ruleToValidatePassword: isOldWayPasswordOk,
  }))
  console.log('part 2:', countValidPassword({
    inputs: PUZZLE_INPUT_DAY_TWO,
    ruleToValidatePassword: isNewWayPasswordOk,
  }))
}

resolveExoDayOne()
resolveExoDayTwo()
