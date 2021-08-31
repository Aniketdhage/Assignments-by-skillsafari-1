// Find sum of an array and display the output . Example [10,4,5,2,5,6,9].

// let arr = [10,4,5,2,5,6,9];
// let add = 0;
// for (let i of arr){
//     add = i + add;
// }
// console.log(add);

// Find average of an array and display the output.

// let arr = [10,4,5,2,5,6,9];
// let add = 0;
// for (let i of arr){
//     add = i + add;
// }
// let avg = add / arr.length;
// console.log(avg);


// Find maximum and minimum of an array.

// let arr= [12,47,85,96];
// let min = Math.min.apply(null, arr),
//     max = Math.max.apply(null, arr);
// console.log(`min  : ${min} max : ${max}`);

// ind Median and Mode of an array.

//     Median : (N+1/2)th term.
//     Mode : Most repeating term

// let arr =[11,54,65,87,98];
// let add = 0;
// for (let i of arr){
//     add = add + i;
// }
// let n = (arr.length +1)/2;
// let median = arr[n-1];
// console.log(median);


// Find number of constants and vowels in a string.


// function countVowel(str) { 
//     const count = str.match(/[aeiou]/gi).length;
//     return count;
// }
// const string = prompt('Enter a string: ');
// const result = countVowel(string);
// let constants = string.length - result;
// console.log(`Vowels : ${result} 
// constants ${constants}`);


// Shift an array by X to right.
// Example [1,2,3,4,5] after shifting to right [5,1,2,3,4]

// let arr =Array.from(prompt("Enter array here"));

// console.log(`Original Array ${arr}`);
// let last = arr.pop();
// let newarr = arr.unshift(last);
// console.log(`New Array ${arr}`);


// Find sum of two arrays.

//     [3,5,2,9,4] = 3+5+2+9+4 = 23
//     [6,2,8,1,3] = 6+2+8+1+3 = 20
//     Final Output : 20+23 = 43

// let arr = [3,5,2,9,4];
// let arr2 = [6,2,8,1,3];
// let add = 0;
// let add2 = 0;
// for (let i of arr){
//     add = i + add;
// }

// for (let j of arr2){
//     add2 = j + add2 ; 
// }

// let addition = add + add2 ; 
// console.log(addition);
