/**
 * Module for obtaining descriptive information about a set of data.
 *
 * @author Oskar Lövsveden
 * @version 1.0.0
 */

'use strict'

/**
 * Returns the descriptive information (maximum, mean, median, minimum,
 * mode, range and standard deviation) from a set of numbers.
 *
 * @param {number[]} numbers The set of data to be analyzed.
 * @throws {TypeError} The passed argument is not an array.
 * @throws {Error} The passed array contains no elements.
 * @throws {TypeError} The passed array contains not just numbers.
 * @returns {{maximum: number, mean: number, median: number, minimum: number, mode: number[], range: number, standardDeviation: number}}
 */
function descriptiveStatistics (numbers) {
  const descStats = {
    maximum: maximum(numbers),
    mean: mean(numbers),
    median: median(numbers),
    minimum: minimum(numbers),
    mode: mode(numbers),
    range: range(numbers),
    standardDeviation: standardDeviation(numbers)
  }

  return descStats
}

/**
 * Checks if the passed argument is an array containing only numbers.
 *
 * @param {number[]} numbers The set of data to be analyzed.
 * @throws {TypeError} The passed argument is not an array.
 * @throws {Error} The passed array contains no elements.
 * @throws {TypeError} The passed array contains not just numbers.
 */
function validateArray (numbers) {
  if (!Array.isArray(numbers)) {
    throw new TypeError('The passed argument is not an array.')
  }

  if (!numbers.length) {
    throw new Error('The passed array contains no elements.')
  }

  for (let i = 0; i < numbers.length; i++) {
    if (typeof (numbers[i]) !== 'number') {
      throw new TypeError('The passed array contains not just numbers.')
    }
  }
}

/**
 * Returns the highest value number from a set of numbers.
 *
 * @param {number[]} numbers The set of data to be analyzed.
 * @throws {TypeError} The passed argument is not an array.
 * @throws {Error} The passed array contains no elements.
 * @throws {TypeError} The passed array contains not just numbers.
 * @returns {number} The biggest number.
 */
function maximum (numbers) {
  validateArray(numbers)

  const copy = numbers.slice(0)

  const maxValue = Math.max(...copy)
  return maxValue
}

/**
 * Returns the mean value from a set of numbers.
 *
 * @param {number[]} numbers The set of data to be analyzed.
 * @throws {TypeError} The passed argument is not an array.
 * @throws {Error} The passed array contains no elements.
 * @throws {TypeError} The passed array contains not just numbers.
 * @returns {number} The mean value.
 */
function mean (numbers) {
  validateArray(numbers)

  let sumOfNumbers = 0

  for (let i = 0; i < numbers.length; i++) {
    sumOfNumbers += numbers[i]
  }

  const meanValue = sumOfNumbers / numbers.length
  return meanValue
}

/**
 * Returns the median value from a set of numbers.
 *
 * @param {number[]} numbers The set of data to be analyzed.
 * @throws {TypeError} The passed argument is not an array.
 * @throws {Error} The passed array contains no elements.
 * @throws {TypeError} The passed array contains not just numbers.
 * @returns {number} The median value.
 */
function median (numbers) {
  validateArray(numbers)

  const copy = numbers.slice().sort((a, b) => a - b)
  // https://www.jstips.co/en/javascript/array-average-and-median/
  // Used this as inspiration for getting my low/high index.
  const lowMiddle = Math.floor((copy.length - 1) / 2)
  const highMiddle = Math.ceil((copy.length - 1) / 2)
  const medianValue = (copy[lowMiddle] + copy[highMiddle]) / 2

  return medianValue
}

/**
 * Returns the lowest value number from a set of numbers.
 *
 * @param {number[]} numbers The set of data to be analyzed.
 * @throws {TypeError} The passed argument is not an array.
 * @throws {Error} The passed array contains no elements.
 * @throws {TypeError} The passed array contains not just numbers.
 * @returns {number} The smallest number.
 */
function minimum (numbers) {
  validateArray(numbers)

  const copy = numbers.slice(0)

  const minValue = Math.min(...copy)
  return minValue
}

/**
 * Returns the most frequently occurring number from a set of numbers.
 *
 * @param {number[]} numbers The set of data to be analyzed.
 * @throws {TypeError} The passed argument is not an array.
 * @throws {Error} The passed array contains no elements.
 * @throws {TypeError} The passed array contains not just numbers.
 * @returns {number[]} The mode in the form of an array.
 */
function mode (numbers) {
  validateArray(numbers)

  const freqTable = {}

  // for-loop numbers[]...
  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i]

    // ...if number doesn't exist(undefined), add it and assign 1 as value...
    if (freqTable[number] === undefined) {
      freqTable[number] = 1
      // ...else number does exist, increase value ++
    } else {
      freqTable[number]++
    }
  }

  // Looks for freqTable{}(s) highest values...
  const maxValue = Object.values(freqTable).sort().pop()

  // ...and adds the corresponding keys to an array[].
  const mostFrequentNumbers = Object.keys(freqTable)
    .filter(number => freqTable[number] === maxValue)

  // Maps out a new array and sorts it.
  return mostFrequentNumbers.map(Number).sort((a, b) => a - b)
}

/**
 * Returns the range between the highest and lowest value number from a set of numbers.
 *
 * @param {number[]} numbers The set of data to be analyzed.
 * @throws {TypeError} The passed argument is not an array.
 * @throws {Error} The passed array contains no elements.
 * @throws {TypeError} The passed array contains not just numbers.
 * @returns {number} The range between the biggest and smallest number.
 */
function range (numbers) {
  validateArray(numbers)

  const rangeValue = maximum(numbers) - minimum(numbers)
  return rangeValue
}

/**
 * Returns the standard deviation from a set of numbers.
 *
 * @param {number[]} numbers The set of data to be analyzed.
 * @throws {TypeError} The passed argument is not an array.
 * @throws {Error} The passed array contains no elements.
 * @throws {TypeError} The passed array contains not just numbers.
 * @returns {number} The standard deviation of the passed argument.
 */
function standardDeviation (numbers) {
  let sDev = 0
  // Calls on mean(numbers) to get the mean value.
  const meanValue = mean(numbers)
  let sumOfSqrdNums = 0

  // Loops through numbers..
  for (let i = 0; i < numbers.length; i++) {
    // .. subtracting mean value from each element, squares it and adds it to sumOfSqrdNums.
    sumOfSqrdNums += Math.pow((numbers[i] - meanValue), 2)
  }
  // Square root of (sumOfSqrdNums divied by the amount of elements in numbers[]).
  sDev = Math.sqrt(sumOfSqrdNums / numbers.length)
  return sDev
}

// Exports
exports.descriptiveStatistics = descriptiveStatistics
exports.maximum = maximum
exports.mean = mean
exports.median = median
exports.minimum = minimum
exports.mode = mode
exports.range = range
exports.standardDeviation = standardDeviation
