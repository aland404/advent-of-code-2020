const NECESSARY_FIELD = ['ecl', 'pid', 'eyr', 'hcl', 'byr', 'iyr', 'hgt']

export function isValidPassport(input:string):boolean {
  let keyValuePairs:string[] = []
  input.split(/\n/).forEach((line) => {
    keyValuePairs = keyValuePairs.concat(line.split(' ')
      ?.filter((pair) => pair !== '')
      ?.map((pair) => pair.split(':')?.[0]))
  })
  return NECESSARY_FIELD.every((field) => keyValuePairs.includes(field))
}

export function countValidPassports(stringListOfPassports:string):number {
  const passports = stringListOfPassports.split(/\n\n/)
  return passports.filter((passport) => isValidPassport(passport)).length
}
