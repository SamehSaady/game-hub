class arrUtils {
  // Retrieves an Array with number items starting from 0 to [numOfNumbers - 1].
  // e.g., numOfNumbers = 3, returns [0, 1, 2].
  getRangeFromZero(numOfNumbers: number): number[] {
    return [...Array(numOfNumbers).keys()];
  }

  // Retrieves an Array with number items starting from [start] to [end].
  // e.g., start = 1, end = 3, returns [1, 2, 3].
  getRange(start: number, end: number): number[] {
    return [...Array(end - start + 1).keys()].map((num) => num + start);
  }
}

export default new arrUtils();
