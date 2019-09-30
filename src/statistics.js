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
  // TODO: Collect all values in an object

  maximum(numbers)
  mean(numbers)
}

function validateArray (data) {
  if (!Array.isArray(data)) {
    throw new TypeError('The passed argument is not an array.')
  }

  if (!data.length) {
    throw new TypeError('The passed array contains no elements.')
  }

  // for-loop checking if data[] only contains number.
  for (let i = 0; i < data.length; i++) {
    if (typeof (data[i]) !== 'number') {
      throw new TypeError('The passed array contains not just numbers.')
    }
  }
}

function maximum (numbers) {
  validateArray(numbers)

  const copy = numbers.slice(0)

  const maxValue = Math.max(...copy)
  return maxValue
}

function mean (numbers) {
  validateArray(numbers)
  let sumOfNumbers = 0

  // for-loop adding all numbers in numbers[] to sumOfNumbers.
  for (let i = 0; i < numbers.length; i++) {
    sumOfNumbers += numbers[i]
  }

  const meanValue = sumOfNumbers / numbers.length
  return meanValue
}
// TODO: WRITE FUNCTIONS FOR  Mean, Median, Minimum, Mode, Range, Standard Deviation

// Exports
exports.descriptiveStatistics = descriptiveStatistics
exports.maximum = maximum
exports.mean = mean
exports.median = undefined
exports.minimum = undefined
exports.mode = undefined
exports.range = undefined
exports.standardDeviation = undefined
