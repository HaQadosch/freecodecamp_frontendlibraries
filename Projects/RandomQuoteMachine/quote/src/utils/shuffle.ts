/**
 * Shuffles the elements of an array.
 *
 * I want to generate a series of random quotes from an array of quotes
 * but without repeating the quotes previously displayed.
 * To that end, I shuffle the array of quotes and display them in order.
 * The New Quote action will fetch the next quote in the array.
 *
 * @file   This file is part of the utils library for the randomQuote project.
 * @author HaQadosch Berraka.
 * @since  0.1.0
 */

/**
 * Returns a random number between the specified values.
 *
 * The returned value is no lower than (and may possibly equal) min, and is less than (and not equal) max.
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
 *
 * @name getRandomArbitrary
 * @since 0.1.0
 * @protected
 * @param {number} min - The lower limit of acceptable numbers
 * @param {number} max - The higher limit of acceptable numbers
 * @returns {number} A random number between min and max, min <= number < max
 * @example
 *
 * getRandomArbitrary(3, 8)
 * // => 3
 *
 * getRandomArbitrary(3, 8)
 * // => 6
 */
function getRandomArbitrary (min: number, max: number): number {
  return Math.floor(Math.random() * (max - min)) + min
}

/**
 * Shuffles all the elements of an array.
 *
 * Modern version of the Fisher–Yates shuffle, by Durstenfeld.
 * https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
 * Does not modify the original array.
 *
 * @name shuffle
 * @since 0.1.0
 * @public
 * @template T
 * @param {Array<T>} source - Original array of elements to be shuffled
 * @returns {Array<T>} A new array of same length with the elements in random order
 * @example
 *
 * shuffle([1, 2, 3, 4, 5])
 * // => [3, 5. 4, 1, 2]
 *
 * shuffle([1, 2, 3, 4, 5])
 * // => [1, 4,3, 2, 5]
 */
export function shuffle<T> (source: Array<T>): Array<T> {
  const _source = source.slice()
  return _source.reduce((acc: Array<T>, cur, ind, arr) => {
    const randonIndex = getRandomArbitrary(ind, arr.length)
    const randomElt = arr[randonIndex]
    arr[randonIndex] = cur
    return acc.concat([randomElt])
  }, [])
}