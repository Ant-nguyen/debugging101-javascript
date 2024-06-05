/*
* Identify the issues in the following function. Fibbonaci is a series of 
* numbers where a number is the addition of the last two numbers starting with * 0 and 1.
* The Fibbonaci Sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55…
* Please note Fib{0} = 0 and Fib{1} = 1. 
* 
* HINT: The following algorithm 
* requires some type of optimization to fix the issue.
*/

const fibbonaci = (n) => {
  if (n === 0) return 0;
  if (n === 1) return 1;

  return fibbonaci(n-1) + fibbonaci(n-2);
}

for(let n=0;n<11;n++){
  console.log(fibbonaci(n));
}