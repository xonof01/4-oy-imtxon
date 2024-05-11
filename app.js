//1 variant

//1 masala
// function jasur(str, value) {
//   let index = str.indexOf(value);

//   return str.slice(0, index) + str.slice(index + value.length);
// }

// console.log(jasur("To be or not to be", "not"));
// console.log(jasur("I like legends", "end"));
// console.log(jasur("ABABAB", "BA"));

//2 masal
//.....

//3masal
// function isPrime(n) {
//     if (n <= 1) {
//         return false;
//     }
//     for (let i = 2; i <= Math.sqrt(n); i++) {
//         if (n % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }

//4 masala
// function group(array, keySelector, valueSelector) {
//     const result = {};
//     array.forEach(item => {
//         const key = keySelector(item);
//         const value = valueSelector(item);

//         if (!result[key]) {
//             result[key] = [];
//         }
//         result[key].push(value);
//     });

//     return result;
// }

//5 masala
// function getSumBetweenNumbers(n1, n2) {

//     if (n1 > n2) {
//         [n1, n2] = [n2, n1];
//     }

//     let sum = 0;
//     for (let i = n1; i <= n2; i++) {
//         sum += i;
//     }

//     return sum;
// }

// console.log(getSumBetweenNumbers(1, 2));
// console.log(getSumBetweenNumbers(5, 10));
// console.log(getSumBetweenNumbers(-1, 1));

//6 masala
// function getElementsOneTime(arr) {
//     let countMap = {};
//     let result = [];

//     arr.forEach(element => {
//         if (!countMap[element]) {
//             countMap[element] = 1;
//         } else {
//             countMap[element]++;
//         }
//     });

//     arr.forEach(element => {
//         if (countMap[element] === 1) {
//             result.push(element);
//         }
//     });

//     return result;
// }

// const inputArray = [1, 5, 6, 1, 5, 7, 2];
// console.log(getElementsOneTime(inputArray));

//7 masala
// let massiv = [1, 2, 3, 4, 5];
// let element = 3;
// console.log("Boshlang'ich massiv:", massiv);
// console.log("O'chirilgan element:", element);

// 8 masala
// function removeElements(arr, k, m) {
//   if (n <= m) {
//     return;
//   }
//   var n = arr.length;
//   k--;
//   m--;
//   arr.splice(k, m - k + 1);
//   console.log("Yangi massiv:", arr);
// }

// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// var k = 2;
// var m = 5;
// removeElements(arr, k, m);

//9 masala
//.....?????
