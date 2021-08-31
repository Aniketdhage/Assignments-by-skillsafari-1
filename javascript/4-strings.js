// Write a program that converts the string into uppercase

// let input="SkiilSafari";
// let uppercaseNew= input.toUpperCase();
// console.log(uppercaseNew); //SKIILSAFARI

// Write a program that reads two strings and append first string to the second. So if first string is Good second string is Morning , the program should print MorningGood

// let str1 = toString(prompt("Enter first strings"));
// let str2 = toString (prompt("Enter second strings"));
// let newStings= str2.concat(str1);
// console.log(newStings);

// Program that reads string and count number of characters present in the string

// let strr = +prompt("Enter strings");
// let strr= prompt('enter string here :')
// console.log(strr.length);

// Write a program that converts string like "124" to 124

// let str = "124";
// let strToNum= +str;
// console.log(strToNum);

// Write a program to delete all vowels from a string. Assume string is not more than 80 characters long

// let str= prompt("enter string here");
// let newStr = str.replace( /[aeiou]/g, '');
// console.log(newStr)  

// Write a program to check whether the string is alphanumeric or not , eg:batman@45 contains digit 45

// function isAlphaNumeric(str) {
//     var code, i, len;
  
//     for (i = 0, len = str.length; i < len; i++) {
//       code = str.charCodeAt(i);
//       if (!(code > 47 && code < 58) && 
//           !(code > 64 && code < 91) && 
//           !(code > 96 && code < 123)) { 
//         return false;
//       }
//     }
//     return true;
//   };

//   console.log(isAlphaNumeric("batman@45"));

// A program that reads three strings and prints the longest and smallest one

// let str1 = prompt("enter string 1");
// let str2 = prompt("enter string 2");
// let str3 = prompt("enter string 3");
// if (str1.length > str2.length && str1.length > str3.length){
//     console.log(`${str1} is greater`);
// }
// else if (str2.length > str1.length && str2.length > str3.length){
//     console.log(`${str2} is greater`);
// }
// else {
//     console.log(`${str3} is greater`);
// }

// A program that counts number of vowels and consonants in a String?

// let vowelNew = ['a','e','i','o','u'];
// function counter(text){
//     let add = 0;
//     for (let i of text.toLowerCase()){
//         if(vowelNew.includes(i)){
//             add++;
//         }
//     }
//     return add;
// }

// let input = prompt('enter letter here');
// let output = counter(input);
// let consonants = input.length-output;
// console.log(`vowels : ${output} 
// consonants : ${consonants}`);

// Write a program which receives a string str that calculates the length of a string and return true if the length is greater than 7 without using strlen()

// function addstr(str){
//     let count=0;
//     for (let i of str.toLowerCase()){
//         count++;
//     }
//     return count;
// }
// let input = prompt('enter');
// let output = addstr(input);

// if (output > 7){
//     console.log('true');
// } else {
//     console.log('false');
// }

// Write a program that takes two strings and copies smaller string into bigger string

// let str1 = prompt("enter a string");
// let str2 = prompt("enter second string here");
// let copy = '';
// let copy2 = '';
// if (str1.length > str2.length){
//     copy = str1 + str2 ;
//     console.log(copy);
// } else {
//     copy2 = str2 + str1;
//     console.log(copy2);
// }

