class arrUtils {
  // Retrieves an Array with number items starting from 0 to [numOfNumbers - 1].
  // e.g., numOfNumbers = 3, returns [0, 1, 2].
  getRangeFromZero(numOfNumbers: number): number[] {
    return [...Array(numOfNumbers).keys()];
  }

  // Retrieves an Array with number items starting from [start] to [end].
  // For Example:
  // start = 1, end = 3, returns [1, 2, 3].
  // start = 3, end = 1, returns [].
  // start = 2, end = 2, returns [2].
  getRange(start: number, end: number): number[] {
    if (end < start) return [];

    return [...Array(end - start + 1).keys()].map((num) => num + start);
  }

  // Inserts the [newItem] at [index] of the [array] (mutable).
  insertAt<T>(array: T[], index: number, newItem: T) {
    array.splice(index, 0, newItem);
  }

  // Inserts the [newItem] at [index] in the [array] and returns a deep copy of the new [array] (immutable).
  insertAtCopy<T>(array: T[], index: number, newItem: T): T[] {
    return [...array.slice(0, index), newItem, ...array.slice(index)];
  }
}

export default new arrUtils();
