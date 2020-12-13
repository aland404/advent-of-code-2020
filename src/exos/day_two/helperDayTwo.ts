export function getSpecificInputPart(input:string, part:number):string {
  return input.split(' ')?.[part]
}
export function getFirstNumber(input:string):number {
  return parseInt(getSpecificInputPart(input, 0).split('-')?.[0], 10)
}
export function getSecondNumber(input:string):number {
  return parseInt(getSpecificInputPart(input, 0).split('-')?.[1], 10)
}
export function getLetter(input:string):string {
  return getSpecificInputPart(input, 1)?.slice(0, -1)
}
export function getPassword(input:string):string {
  return getSpecificInputPart(input, 2)
}
export function isOldWayPasswordOk(input:string):boolean {
  const numberOfLetter = getPassword(input)?.match(new RegExp(getLetter(input), 'g'))?.length
  return numberOfLetter
    ? numberOfLetter >= getFirstNumber(input) && numberOfLetter <= getSecondNumber(input)
    : false
}
export function isNewWayPasswordOk(input:string):boolean {
  const password = getPassword(input)
  const letter = getLetter(input)
  const firstLetter = password.charAt(getFirstNumber(input) - 1)
  const secondLetter = password.charAt(getSecondNumber(input) - 1)

  return (firstLetter === letter && secondLetter !== letter)
  || (firstLetter !== letter && secondLetter === letter)
}
interface IParamCountValidPassord {
  inputs: string[];
  ruleToValidatePassword: (input:string) => boolean;
}
export function countValidPassword(params:IParamCountValidPassord):number {
  return params.inputs.filter((input) => params.ruleToValidatePassword(input)).length
}
