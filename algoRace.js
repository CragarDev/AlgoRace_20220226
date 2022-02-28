console.log();
// ? -- Algo Race
//

// 1.write a function that returns the area of a triangle. Easy (area of a triangle is just base*height/2)

function areaOfTriangle(base, height) {
  let area = (base * height) / 2;
  return area;
}
console.log("===== Area of a Triangle =====");
console.log(areaOfTriangle(5, 10));
console.log(areaOfTriangle(13, 20));
console.log(areaOfTriangle(2, 300));
console.log(areaOfTriangle(1, 1));
console.log();
//

// 2.Turn minutes into seconds using a function. Example 1 min: output = 60 seconds  3 mins: output = 180 seconds. Easy

function minutesToSeconds(minutes) {
  return minutes * 60;
}

console.log("==== Minutes into seconds =====");
console.log(minutesToSeconds(7));
console.log(minutesToSeconds(1));
console.log(minutesToSeconds(5));
console.log(minutesToSeconds(50));
console.log(minutesToSeconds(14));
console.log(minutesToSeconds(0));
console.log();
//

// 3.Write a function that returns the sum of two given arrays and the sum of those arrays together
// example: [1,2,3], [1,2,3] = [6], [6] output:12. medium

function arrayAddition(arr1, arr2) {
  let sum1 = 0;
  let sum2 = 0;
  let output = 0;
  for (var i = 0; i < arr1.length; i++) {
    sum1 += arr1[i];
  }
  for (var i = 0; i < arr2.length; i++) {
    sum2 += arr2[i];
  }
  output = sum1 + sum2;
  return [sum1, sum2, output];
}

console.log("==== Sum of arrays =====");

let outPut = arrayAddition([1, 2, 3], [1, 2, 3]);
console.log(
  `Array 1 sum: ${outPut[0]}, Array 2 sum: ${outPut[1]},\nand the total of both arrays is: ${outPut[2]}`
);
console.log();
let outPut2 = arrayAddition(
  [8, 36, 72, 25, 40],
  [65, 58, 57, 54, 19, 122, 433]
);
console.log(
  `Array 1 sum: ${outPut2[0]}, Array 2 sum: ${outPut2[1]},\nand the total of both arrays is: ${outPut2[2]}`
);
console.log();
let outPut3 = arrayAddition(
  [45, 272, 38, 3, 19, 878, 22],
  [457, 98, 986, 78, 6, 95, 425, 12, 141]
);
console.log(
  `Array 1 sum: ${outPut3[0]}, Array 2 sum: ${outPut3[1]},\nand the total of both arrays is: ${outPut3[2]}`
);
console.log();

// 4.Given an unsorted integer array, find a pair with the given sum in it. Hard
// Input:

// nums = [8, 7, 2, 5, 3, 1]
// target = 10

// Output:

// Pair found (8, 2)
// or
//Pair found (7, 3)

var array = [8, 7, 2, 5, 3, 1];
var target = 10;

function pairInArray(arr, target) {
  let pairs = [];
  for (var i = 0; i < arr.length - 1; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] == target) {
        pairs.push([arr[i], arr[j]]);
      }
    }
  }
  return pairs;
}

console.log("==== Pairs in an array =====");

console.log(pairInArray(array, target));
let pairs = pairInArray(array, target);
console.log(pairs);
console.log(
  `There are ${pairs.length} pairs that\nsum to the target of ${target}\nin this array: ${array},\nThey are ${pairs}`,
  pairs
);

//
console.log();
