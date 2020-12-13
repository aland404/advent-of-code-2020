import { PUZZLE_INPUT as PUZZLE_INPUT_DAY_ONE } from './exos/day_01/inputs'
import { PUZZLE_INPUT as PUZZLE_INPUT_DAY_TWO } from './exos/day_02/inputs'
import { PUZZLE_INPUT as PUZZLE_INPUT_DAY_THREE } from './exos/day_03/inputs'
import { PUZZLE_INPUT as PUZZLE_INPUT_DAY_FOUR } from './exos/day_04/inputs'

import { findTwoTuples, findThreeTuples } from './exos/day_01/helperDayOne'
import { countValidPassword, isOldWayPasswordOk, isNewWayPasswordOk } from './exos/day_02/helperDayTwo'
import { countNumberOfThree } from './exos/day_03/helperDayThree'
import { countValidPassports } from './exos/day_04/helperDayFour'

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

function resolveExoDayThree() {
  console.info('__Day Three__')
  console.log('part 1:', countNumberOfThree(PUZZLE_INPUT_DAY_THREE, 3, 1))

  console.log('part 2:', countNumberOfThree(PUZZLE_INPUT_DAY_THREE, 1, 1)
  * countNumberOfThree(PUZZLE_INPUT_DAY_THREE, 3, 1)
  * countNumberOfThree(PUZZLE_INPUT_DAY_THREE, 5, 1)
  * countNumberOfThree(PUZZLE_INPUT_DAY_THREE, 7, 1)
  * countNumberOfThree(PUZZLE_INPUT_DAY_THREE, 1, 2))
}

function resolveExoDayFour() {
  console.info('__Day Four__')
  console.log('part 1:', countValidPassports(PUZZLE_INPUT_DAY_FOUR))
}

resolveExoDayOne()
resolveExoDayTwo()
resolveExoDayThree()
resolveExoDayFour()
