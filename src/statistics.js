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
  // TODO: Write your code here.

}

function duplicateArray (numbers) {
  const copy = numbers.slice(0)
  return copy
}

function validateArray (data) {
  if (!Array.isArray(data)) {
    throw new TypeError('The passed argument is not an array.')
  }

  if (!data.length) {
    throw new TypeError('The passed array contains no elements.')
  }

  if (typeof data !== 'number') {
    throw new TypeError('The passed array contains not just numbers.')
  }
}

// TODO: WRITE FUNCTIONS FOR Maximum, Mean, Median, Minimum, Mode, Range, Standard Deviation

// Exports
exports.descriptiveStatistics = descriptiveStatistics
exports.maximum = undefined
exports.mean = undefined
exports.median = undefined
exports.minimum = undefined
exports.mode = undefined
exports.range = undefined
exports.standardDeviation = undefined
