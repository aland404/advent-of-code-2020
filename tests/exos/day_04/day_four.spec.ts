import { expect } from 'chai'
import { isValidPassport, countValidPassports } from '../../../src/exos/day_04/helperDayFour'
import 'mocha'

const input = `ecl:gry pid:860033327 eyr:2020 hcl:#fffffd
byr:1937 iyr:2017 cid:147 hgt:183cm

iyr:2013 ecl:amb cid:350 eyr:2023 pid:028048884
hcl:#cfa07d byr:1929

hcl:#ae17e1 iyr:2013
eyr:2024
ecl:brn pid:760753108 byr:1931
hgt:179cm

hcl:#cfa07d eyr:2025 pid:166559648
iyr:2011 ecl:brn hgt:59in`

describe('day four part 1', () => {
  it('Should return true, it is a valid passport', () => {
    const validPassport = `ecl:gry pid:860033327 eyr:2020 hcl:#fffffd
    byr:1937 iyr:2017 cid:147 hgt:183cm`

    const isValid = isValidPassport(validPassport)

    expect(isValid).equal(true)
  })

  it('Should return false, it is an invalid passport', () => {
    const wrongPassport = `hcl:#cfa07d eyr:2025 pid:166559648
    iyr:2011 ecl:brn hgt:59in`

    const isValid = isValidPassport(wrongPassport)

    expect(isValid).equal(false)
  })

  it.only('Should return 2, the number of valid passports', () => {
    const nbValidPassports = countValidPassports(input)

    expect(nbValidPassports).equal(2)
  })
})

describe('day four part 2', () => {
  it('', () => {
  })
})
