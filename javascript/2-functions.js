// Given a and b, your function should return the value of ab
// Example:
// Input: power(2,3) ––> Output: 8

// function power(a,b){
//     let pow=1;
//     while(b>0){
//         pow=pow*a;
//         b--;
//     }
//     console.log(+pow);
// }

// power(2,3);

// Given length of a regular hexagon, your function should return area of the hexagon.
// Example:
// Input: areaOfHexagon(10) ––> Output: 259.80

// function areaOfHexagon (length) {
//     let area=(3 * Math.sqrt(3) * Math.pow(length, 2)) / 2;
//     console.log(area);
// }

// areaOfHexagon(10);

// Given a sentence, your functions should return the number of words in the sentence.
// Example:
// Input: noOfWords(We are alchemyst) ––> Output: 3

//  function noOfWords(a){
//      let spl=a.split(" ");
//      console.log(spl.length);
//  }
//  noOfWords("We are alchemyst");

// Given n numbers, your function should return the minimum of them all. The number of parameters won't be accepted from user.
// Example:
// Input: findMin(3,5) ––> Output: 3
// Input: findMin(3,5,9,1) ––> Output: 1

// function findMin(...a){
//     let num;
//     for(num in a){
//      let value = Math.min(...a);
//      console.log(value);
//     }
// }
// findMin(3,5);
// findMin(5,5,9,1);


// Given n numbers, your function should return the maximum of them all. The number of parameters won't be accepted from user.
// Example:
// Input: findMax(3,5) ––> Output: 5
// Input: findMax(3,5,9,1) ––> Output: 9

// function findMax(...a){
//     let num;
//     for(num in a){
//      let value = Math.max(...a);
//      console.log(value);
//     }
// }

// findMax(3,5);
// findMax(3,5,9,1);

// Given three angles of a triange, your function should return if it is a scalen, isosceles, equilateral triangle or not a triangle at all. Example:
// Input: typeOfTriangle(30, 60, 90) ––> Output: Scalen Triangle

// function typeOfTriangle(x,y,z){
//     if (x==y && y==z && x==z){
//         console.log("equilateral triangle");
//     }else if (x==y || y==z || x==z) {
//         console.log("Isosceles Triangle");
//     }
//     else if(x!=y && y!=z && x!=z){
//         console.log("Scalene Triangle");
//     }else{
//         console.log("It Is Not A Tringle...")
//     }
// }

// typeOfTriangle(30,60,90);

// Given an array, your function should return the length of the array.
// Example:
// Input: arrayLength([1,5,3,7,8]) ––> Output: 5

// let arrayLength=(a)=>{
//     console.log(a.length);
// }
// arrayLength([1,5,3,7,8]);

// Given an array and an item, your function should return the index at which the item is present.
// Example:
// Input: indexOf([1,6,3,5,8,9], 3) ––> Output: 2

// let indexOf = (item,index)=>{
//     let idx=item.indexOf(index);
//     console.log(idx);
// }

// indexOf([1,6,3,5,8,9], 3);

// Given an array and two numbers, your function should replace all entries of first number in an array with the second number.
// Example:
// Input: replace([1,5,3,5,6,8], 5, 10) ––> Output: [1,10,3,10,6,8]

// let replace=(arr,num1,num2)=>{
//     let rep=arr.replace(5, 10);
//     console.log(rep);
// }
// replace([1,5,3,5,6,8], 5, 10);

// Given two arrays, your function should return single merged array.
// Example:
// Input: mergeArray([1,3,5], [2,4,6]) ––> Output: [1,3,5,2,4,6]

// let mergeArray=(array1,array2)=>{
//     let newArray=array1 + "," + array2;
//     console.log(newArray);
// }

// mergeArray([1,3,5], [2,4,6]);

// Given a string and an index, your function should return the character present at that index in the string.
// Example:
// Input: charAt("skillsafari", 4) ––> Output: l

// let charAt = (str,index)=>{
//     let char=str[index];
//     console.log(char);
// }

// charAt("skillsafari", 4);

// function minDate(date1,date2){
//     let newDate = [];
//     newDate.push(new Date(date1));
//     newDate.push(new Date(date2));
//     let minimumDate=new Date(Math.min.apply(null, newDate));
//     console.log(minimumDate);
// }
// minDate("02/05/2021", "24/01/2021");

// Write a function which generates a secret code from a given string, by shifting characters of alphabet by N places. Example:
// Input: encodeString("skill", 2) ––> Output: umknn

// let encodeString=(str,num)=>{
//     let newStr= " ";
//     let newCode = " ";
//     for(let i=0;i<str.length;i++){
//         newCode = (str[i].charCodeAt()) + num;
//         newStr += String.fromCharCode(newCode);
//     }
//     console.log(newStr);
// }

// encodeString("skill", 2);

// Given a sentence, return a sentence with first letter of all words as capital.
// Example:
// Input: toSentenceCase('we are alchemyst') ––> Output: We Are Alchemyst

// Given an array of numbers, your function should return an array in the ascending order.
// Example:
// Input: sortArray([100,83,32,9,45,61]) ––> Output: [9,32,45,61,83,100]

// let sortArray = (arr)=>{
//     let newSorted = arr.sort((a,b)=>a-b);
//     console.log(newSorted);
// }

// sortArray([100,83,32,9,45,61]);

// Given a sentence, your function should reverse the order of characters in each word, keeping same sequence of words.
// Example:
// Input: reverseCharactersOfWord('we are alchemyst') –––> Output: ew era tsymehcla

// let reverseCharactersOfWord=(words)=>{
//     let splited = words.split(" ");
//     let newWord = splited.reverse();
//     console.log(newWord);
// }

// reverseCharactersOfWord('we are alchemyst');

