class numUtils {
  // Retrieves the Sum of the passed array of numbers.
  sum(arr: number[]) {
    let sum = 0;

    for (let num of arr) {
      sum += num;
    }

    return sum;
  }
}

export default new numUtils();
