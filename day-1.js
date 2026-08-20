// //even or odd==================================
// function value(num) {
//   if (num % 2 === 0) {
//     return " number is even";
//   } else {
//     return "number is odd";
//   }
// }
// console.log(value(4));

// //2=============================================
// function checkintegar(num) {
//   if (num > 0) {
//     return "positive number";
//   } else if (num < 0) {
//     return "negative number";
//   } else {
//     return "its zero";
//   }
// }
// console.log(checkintegar(-7));

// //3=============================================
// function largenumber(num) {
//   let max = 0;
//   for (let i = 0; i <= num.length; i++) {
//     if (num[i] > max) {
//       max = num[i];
//     } else {
//       continue;
//     }
//   }
// }
// console.log(largenumber(5, 35, 6, 3, 5));

// let num = (5, 5, 2, 6, 2, 5, 44);
// let max = 0;
// for (let i = 0; i >= num.length; i++) {
//   if (num[i] > max) {
//     max = num[i];
//   } else {
//     continue;
//   }
// }
// console.log(max);

// function large(a, b, c) {
//   if (a >= b && a >= c) {
//     return a;
//   } else if (b >= c && b >= a) {
//     return b;
//   } else if (c >= a && c >= b) {
//     return c;
//   } else if (a === b && b === c && c === a) {
//     return " all numbers are equal";
//   }
// }
// // }console.log(large(4,7,4))
// // console.log(large(4, 7, 4));
// console.log(large(10, 5, 10));
// console.log(large(5, 5, 5));
// console.log(large(20, 8, 15));

// let count = 0;
// for (let i = 1; i <= 20; i++) {
//   if (i % 2 == 0) {
//     count++;
//   }
// }
// console.log(count);

// let num = 1221;
// let rev = 0;
// let original = num;
// while (num > 0) {
//   let digit = num % 10;
//   rev = rev * 10 + digit;
//   num = Math.floor(num / 10);
// }
// if (original === rev) {
//   console.log("palindome");
// } else {
//   console.log("not a palindrome");
// }

// let fact = 1;
// for (let i = 1; i <= 5; i++) {
//   fact *= i;
//   console.log(fact);
// }
// console.log(fact);

// //============PRIME NUMBER==========================
// for (let num = 1; num <= 20; num++) {
//   let isPrime = true;
//   count = 0;
//   if (num <= 1) {
//     isPrime = false;
//   } else {
//     for (let i = 2; i < num; i++) {
//       if (num % i === 0) {
//         isPrime = false;
//         break;
//       }
//     }
//   }
//   if (isPrime) {
//     console.log(num);
//   }
// }

// //==Fibonacci Series
// let a = 0;
// let b = 1;
// for (let i = 0; i < 10; i++) {
//   console.log(a);
//   let next = a + b;
//   a = b;
//   b = next;
// }

// //=========

// let digit = 1234;
// let count = 0;
// while (digit > 0) {
//   digit = Math.floor(digit / 10);
//   count++;
// }
// console.log(count);

// //==============sum of all digits===========
// let num = 1234;
// let sum = 0;
// while (num > 0) {
//   let digit = num % 10;
//   sum = sum + digit;
//   num = Math.floor(num / 10);
// }
// console.log(sum);

// //==============armstrong num=================
// let num = 407;
// let original = num;
// let sum = 0;
// while (num > 0) {
//   let digit = num % 10;
//   digit = digit ** 3;
//   sum = sum + digit;
//   num = Math.floor(num / 10);
// }
// if (original === sum) {
//   console.log("this is armstrong number");
// } else {
//   console.log("its not a armtsrong number");
// }

// //=========perfect number===================
// let n = 28;
// let sum = 0;
// for (let i = 1; i < n; i++) {
//   if (n % i === 0) {
//     console.log(i)
//     sum = sum + i;
    
//   }
// }
// console.log(sum)
// if(sum===n){
//     console.log("hurrah its a perfect number")
// }else{
//     console.log("sorryy..its not perfect number")
// }


// let a = 24
// let b=36
// let gcd=0
// for(let i=1;i<=a;i++){
//     if(a%i===0 && b%i===0){
//         if(gcd<i){
//         gcd=i;
//     }
// }
// }console.log(gcd);

//====================LCM=======================
// a=36
// b=24
// for(i=36;i<a*b;i++){
//     if(i%a===0 && i%b===0){
//        console.log(i);
//        break;
        
//     }
// }

//largest element in an array====================
// let arr=[10,25,7,42,18]
// let max=arr[0]
// for(i=0;i<arr.length;i++){

//      if(max<arr[i]){
//         max=arr[i]
//      }
// }console.log(max)

//smallest element in an array====================
// let arr=[10,24,3,4,1,2,5,3]
// let min=arr[0]
// for(let i=0;i<arr.length;i++){
//     if(min>arr[i]){
//         min=arr[i]
//     }
// }console.log(min)

//sum of array elements============================
// let arr=[3,2]
// let sum=0
// for(let i=0;i<arr.length;i++){
//     sum=sum+arr[i]
// }console.log(sum)

//=====count even or odd==================
// let arr=[4,4,7,5,93]
// let even=0
// let odd=0
// for(let i=0;i<arr.length;i++){
//     if(arr[i]%2===0){
//         even++
//     }else{
//         odd++
//     }
// }console.log(even)
// console.log(odd)

//find a specific element