const TREE = '#'

export function countNumberOfThree(inputs:string[],
  nbOfRightMoves:number, nbOfDownMoves: number) :number {
  let nbOfThree = 0
  let currentXPosition = nbOfRightMoves
  const inputLenght = inputs[0].length
  for (let i = 0; i < inputs.length; i += nbOfDownMoves) {
    const isNextATree = inputs[i + nbOfDownMoves]?.charAt(currentXPosition) === TREE
    if (isNextATree) nbOfThree += 1
    currentXPosition = (currentXPosition + nbOfRightMoves) % inputLenght
  }
  return nbOfThree
}

export function countNumberOfThreePartTwo(inputs:string[]) :number {
  return inputs.length
}
