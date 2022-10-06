/**
 * The programm
 *
 *
 * By: Igor Zhelezniak
 * Version: 1.0
 * Since:   2022-10-06
 */
import { readFileSync } from 'fs'

function ArrayOne(intArray: number[]): number {
  let sum = 0
  const arrayLength = intArray.length

  for (let i = 0; i < arrayLength; i++) {
    sum += intArray[i]
  }

  return sum / arrayLength
}

function ArrayTwo(intArray: number[]): number {
  let median = 0

  const sortedArray = intArray.sort(function (a, b) {
    return a - b
  })

  const arrayLength = intArray.length

  if (arrayLength % 2 === 0) {
    median =
      (sortedArray[arrayLength / 2] + sortedArray[arrayLength / 2 - 1]) / 2
  } else {
    median = sortedArray[(arrayLength - 1) / 2]
  }

  return median
}

const filePath = './set1.txt'

const file = readFileSync(filePath, 'utf8')
const arrayN = file.split(/\r?\n/)

arrayN.pop()

const answer = []

for (let i = 0; i < arrayN.length; i++) {
  answer.push(Number(arrayN[i]))
}

const arrayCont = answer.toString()
console.log(`[${arrayCont}]`)

console.log('\nCalculating stats...')
console.log(`Mean: ${String(ArrayOne(answer))}`)
console.log(`Median: ${String(ArrayTwo(answer))}`)

console.log('\nDone.')
