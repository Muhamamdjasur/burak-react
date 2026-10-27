// Z-TASK
 export function sumEvens(arr: number[]): number {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sum += arr[i];
    }
  }

  return sum;
}

console.log(sumEvens([1, 2, 3])); // 2

// # Y Task

// function findIntersection(arr1: number[], arr2: number[]): number[] {
//   return arr1.filter((value) => arr2.includes(value));
// }

// console.log(findIntersection([1, 2, 3], [3, 2, 0]));


export {};