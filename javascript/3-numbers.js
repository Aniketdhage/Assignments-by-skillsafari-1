// Write a program to input 2 numbers and display the sum of the numbers to the console.

// Input Number 1: 20
// Input Number 2: 40
// Sum : 60

// let num1 = +prompt("Input Number 1:");
// let num2 = +prompt("Input Number 2:");
// let sum = num1+num2;
// console.log(`Sum : ${sum}`);

// Write a JavaScript program to calculate the simple interest given P,R,T with the given formula. Formula: SI = (P * T * R) / 100 Where: P = principal amount T = time R = rate SI = simple interest

// Input: P=100, R=6%, T=2
// Output: 12

// let p = 100;
// let r=6;
// let t = 2;
// let si = p*r*t/100; 
// console.log(si);



// Write a program to calculate the kinetic energy of a body with mass 'm' and volume 'v'.

// Formula : 0.5 * m * v * v

// let m= +prompt("Enter Mass :");
// let v= +prompt("Enter Valume");
// let kineticEnergy = 0.5 * v * v;
// console.log(kineticEnergy);


// Write a program to convert Fahrenheit to Celsius. For Fahrenheit to Celsius conversion use: T = (T - 32) 9/5 'T' is the temperature on the Fahrenheit scale.

// let t = +prompt("Enter Temperature");
// let FahrenheitToCelsius = (t-32)*(5/9);
// console.log(FahrenheitToCelsius);



// Calculate the area, perimeter of a s1.re of side 'a'. Also, calculate the surface area and the volume of a cube of side 'a'.
// Formula :
// Area: a*a
// Perimeter: 4*a
// Surface Area: 6*a*a
// Volume: a*a*a

// remaining************************************

// Given the Cost Price(CP) and Selling Price(SP) of a product. Write a Program to Calculate the Profit or Loss.
// Input: CP = 1500, SP = 2000
// Output: 500 Profit

// Input: CP = 3125, SP = 1125
// Output: 2000 Loss

// let costPrice = +prompt("Please enter cost price of product : ");
// let sellingPrice = +prompt("Please enter selling price :");
// if (sellingPrice>costPrice){
//     let profit = sellingPrice - costPrice ;
//     console.log(`${profit} Profit`);
// } 
// else if(sellingPrice<costPrice){
//     let loss = costPrice - sellingPrice;
//     console.log(`${loss} Loss`);
// } else {
//     console.log("Equal");
// }

// Write a program to calculate sum of N natural digits, as input by the users?

// Enter a positive integer: 100
// Sum = 5050

// function naturalSum(n)
// {
//     if (n <= 1)
//         return n;
//     return n + naturalSum(n - 1);
// }
// let n = +prompt(`Enter Positive Integer : `);
// console.log(naturalSum(n));
// *************************************************************
// Write a JavaScript program to compute the sum of all digits that occur in a given string.

// Input: 1234
// Output: 1+2+3+4 = 10

// let num = +prompt("Enter Number");
// let sum=0;
// while(num !=0){
//     sum=sum + num % 10;
//     num = parseInt (num / 10);
// }
// console.log(sum);
// ******************************************************************

// Write a JavaScript program that reverses a number.
// Example:
// Input:  32243;
// Output:  34223


// function reverseNumber(n)
// {
// 	n = n + "";
// 	return n.split("").reverse().join("");
// }
// console.log(reverseNumber(32243));

// *****************************************************************

