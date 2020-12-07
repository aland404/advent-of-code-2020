export function findTwoTuples(nums: number[], target:number = 2020): [number, number] {
  for (let i = 0; i < nums.length; i += 1) {
    for (let j = i + 1; j < nums.length; j += 1) {
      if (target === nums[i] + nums[j]) return [nums[i], nums[j]]
    }
  }
  throw new Error('No two tuples found')
}

export function findThreeTuples(nums: number[], target:number = 2020): [number, number, number] {
  for (let i = 0; i < nums.length; i += 1) {
    for (let j = i + 1; j < nums.length; j += 1) {
      for (let k = j + 1; k < nums.length; k += 1) {
        if (target === nums[i] + nums[j] + nums[k]) return [nums[i], nums[j], nums[k]]
      }
    }
  }
  throw new Error('No three tuples found')
}
