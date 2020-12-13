import { expect } from 'chai'
import {
  getSpecificInputPart, getFirstNumber, getSecondNumber,
  getLetter, getPassword, isOldWayPasswordOk, countValidPassword, isNewWayPasswordOk,
} from '../../../src/exos/day_02/helperDayTwo'
import 'mocha'

describe('day two part 1', () => {
  const data = '7-77 a: abcde'
  it('returns the -max part', () => {
    const minTimes = getSpecificInputPart(data, 0)
    expect(minTimes).equal('7-77')
  })
  it('returns the -max part', () => {
    const minTimes = getSpecificInputPart(data, 1)
    expect(minTimes).equal('a:')
  })
  it('returns the -max part', () => {
    const minTimes = getSpecificInputPart(data, 2)
    expect(minTimes).equal('abcde')
  })
  it('returns the min times the letter has to appear', () => {
    const minTimes = getFirstNumber(data)
    expect(minTimes).equal(7)
  })
  it('returns the max times the letter has to appear', () => {
    const minTimes = getSecondNumber(data)
    expect(minTimes).equal(77)
  })
  it('returns the letter which has to appear', () => {
    const minTimes = getLetter(data)
    expect(minTimes).equal('a')
  })
  it('returns the letter which has to appear', () => {
    const minTimes = getPassword(data)
    expect(minTimes).equal('abcde')
  })
  it('returns false, input does not match the password policy', () => {
    const wrongPasswordInput = '7-77 a: abcde'
    const passwordOk = isOldWayPasswordOk(wrongPasswordInput)
    expect(passwordOk).equal(false)
  })
  it('returns true, input does match the password policy', () => {
    const goodPasswordInput = '1-5 a: abcde'
    const passwordOk = isOldWayPasswordOk(goodPasswordInput)
    expect(passwordOk).equal(true)
  })
  it('returns 2, 2 inputs respect the old password policy', () => {
    const passwordInputs = ['1-5 a: abcde', '7-77 a: abcde', '4-5 b: abcdebbbbb', '4-5 b: abcdebbb']
    const nbValidPassword = countValidPassword({
      inputs: passwordInputs,
      ruleToValidatePassword: isOldWayPasswordOk,
    })
    expect(nbValidPassword).equal(2)
  })
  it('returns false, input does not match the new password policy', () => {
    const wrongPasswordInput = '2-5 a: bacda'
    const passwordOk = isNewWayPasswordOk(wrongPasswordInput)
    expect(passwordOk).equal(false)
  })
  it('returns true, input does match the new password policy', () => {
    const goodPasswordInput = '3-4 a: bcada'
    const passwordOk = isNewWayPasswordOk(goodPasswordInput)
    expect(passwordOk).equal(true)
  })
  it('returns 2, 2 inputs respect the new password policy', () => {
    const passwordInputs = ['1-3 a: abcde', '1-3 b: cdefg', '2-9 c: ccccccccc', '2-9 c: cdccccccc']
    const nbValidPassword = countValidPassword({
      inputs: passwordInputs,
      ruleToValidatePassword: isNewWayPasswordOk,
    })
    expect(nbValidPassword).equal(2)
  })
})
