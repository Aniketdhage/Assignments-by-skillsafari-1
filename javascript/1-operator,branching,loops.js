// Write a program to add 5 numbers. The value of numbers are num1=5, num2=13, num3=7, num4=21 and num5=48.

// let num1=5,num2=13, num3=7, num4=21, num5=48;
// let add=num1+num2+num3+num4+num5;
// console.log(`The addition of five numbers is ${add}`);

// Write a program to take a number input from user and determine whether the number is odd or even.

// let number =+prompt("Enter a number : ");

// if(number%2===0){
//     console.log(`The ${number} is even.`);
// } else {
//     console.log(`The ${number} is odd.`);
// }

// Write a program to find the maximum and minimum out of two given numbers. The numbers are num1=129 and num2=251.

// let num1=129, num2=251;

// if (num1>num2){
//     console.log(`${num1} is greater than ${num2}`);
// } else {
//     console.log(`${num2} is greater than ${num1}`);
// }

// Write a program to find the maximum out of three given numbers. The numbers are num1=8, num2=23 and num3=17.

// let  num1=8, num2=23, num3=17;

// if (num1>num2 && num1>num3){
//     console.log(`${num1} is greater than ${num2} and ${num3}`);
// }
// else if (num2>num1 && num2>num3) {
//     console.log(`${num2} is greater than ${num1} and ${num3}`);
// }
// else {
//     console.log(`${num3} is greater than ${num1} and ${num2}`);
// }

// Write a program to find the minimum out of three given numbers. The numbers are num1=35, num2=29 and num3=46.

// let  num1=35, num2=29, num3=46;

// if (num1<num2 && num1<num3){
//     console.log(`${num1} is smaller than ${num2} and ${num3}`);
// }
// else if (num2<num1 && num2<num3) {
//     console.log(`${num2} is smaller than ${num1} and ${num3}`);
// }
// else {
//     console.log(`${num3} is smaller than ${num1} and ${num2}`);
// }

// Write program to take a month as an input from the user and find out whether the month has 31 days or not.

// let month=parseInt(prompt("Enter Month"));
// if (month===1 || month===3 || month===5 || month===7 || month===8 || month===10 || month===12){
//     console.log("Number of days is 31");
// } 
// else if(month===2){
//     console.log("Number of days is 28");
// }
// else{
//     console.log("Number of days is 30");
// }

// let i=[];
// for (i=1; i<=100; i++)
// {
    

// Fizzbuzz - Write a program to return an array from 1 to 100. But for every multiple of 3, replace the number with "Fizz", for every multiple of 5, replace the number with "Buzz" and for every multiples of 3 & 5, replace with "FizzBuzz".
// Your output should look something like this 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz, 16, 17 .....

//     if (i%15 == 0)   
//         console.log("FizzBuzz" + " ");

//     else if ((i%3) == 0)
//         console.log("Fizz" + " ");               
     
//     else if ((i%5) == 0)                   
//         console.log("Buzz" + " ");               
 
//     else      
//         console.log(i + " ");               
// }



// Print the following star pattern :-

// *
// * *
// * * *
// * * * *
// * * * * *

// let limit=5;
// let star="";
// for(let i=1; i<=limit; i++){
//     for(let j=0; j<i; j++){
//         star +="*";
//     }
//     star += "\n";
// }
// console.log(star);

// Write a program to take a number input from user and print multiplication table 12 times for that number.

// let num=+prompt("Enter Number");
// for (let i=1; i<=12; i++){
//     let table=num*i;
//     console.log(table);
// }

// Write a program to return a Fibonacci series : 0,1,1,2,3,5,8,13,21...

// let fib = 0,  fib2 = 1, nextNumber, i;  
// let num = +prompt (" Enter the limit for Fibonacci Series ");  

// for ( i = 1; i <= num; i++)  
// { 
    
//     console.log(fib);  
//     next_num = fib + fib2; 
      
//     fib = fib2; 
//     fib2 = next_num;

// }  

// Write a program to take an input from a user and find its Factorial. Example: Factorial of 5 is 120

// let next=1;
// let num =parseInt(prompt("enter a number"));
// for(let i=1;i<=num;i++){
//     next=next*i;
// }
// console.log(next);

// Write a Program to take a number input from user and find if the number is Prime or not.

// let num=+prompt("Enter Number");
// let isPrime=true;
// if(num===1){
//     console.log("prime");
// }else if(num>1){
//     for (let i = 2; i < num; i++) {
//         if (num % i == 0) {
//             isPrime = false;
//             break;
//         }
// }}
// if(isPrime==true){
//     console.log("prime");
// } else {
//     console.log("not prime");
// }

// Write a program to take a day as an input and determine whether it is a weekday or weekend.