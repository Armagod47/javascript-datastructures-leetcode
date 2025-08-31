/* ========== Section 2 : Big O ========== */ 

/*
Big O
Time Complexity :
We dont measure TC in time, we measure it in no. of operations

Space Complexity :
Amount of memory used
Code 1 (C1) : Completes first, but uses lot of memory
Code 2 (C2) : Completes In long time, but uses less memory

Big O Worst Case :
Omega - Best Case
Theta - Avg Case
Omicron or O - Worst Case

 */ 

// -----------------------------------------------------------

/* Big O - Notations */ 

// 1. O(n) (Proportional): Least Efficient
//We Pass n and it runs n times
function printer(n){
    for(let i = 0;i<n;i++){
        console.log(i);
    }
}
printer(10)

// Big O Drop Constants / Remove Constants
/* n ran , n + n = 2n times: i.e O(2n) or O(n)
    No matter how many times it runs, we can drop the constant and write it as O(n) */
function printer(n){
    for(let i = 0;i<n;i++){
        console.log(i);
    }
    
    for(let j = 0;j<n;j++){
        console.log(j);
    }
}
printer(3)


// 2. O(n^2) : Loop within a loop
// No. of items that are output it n*n or n^2 i.e O(n^2)
// If we have two tasks accomplishing same task.
// O(n^2) & O(n), O(n) will be better and since it completes the task in fewer operations
// O(n^2) is considered as inefficient code , as compared to O(n)
function printer(n){
    for(let i = 0;i<n;i++){
         for(let j = 0;j<n;j++){
        console.log(i,j);
    }
    }
}
printer(10)


// Big O Drop Non Dominants
// 1st For loop ran O(n^2) times & 2nd For Loop ran O(n) times
// O(n^2) + O(n) => O(n^2 + n) => O(n^2) , if n=10, than n^2=100, here n=10 is very less significant w.r.t 100
// So we drop the non dominant.
function printer(n){
    for(let i = 0;i<n;i++){
         for(let j = 0;j<n;j++){
        console.log(i,j);
    }
    }
    
      for(let k = 0;k<n;k++){
        console.log(k);
    }
}
printer(10)

// 3. O(1) : is referred to as constant times
// It is the most efficient Big O.
// Ther eis only one operation here, i.e addition
// So it doesnt matter if n is 1 or a million. No. of operations will always be one
// No. of operation is not dependent on n
function addItems(n){
    return n + n
}

//Simplifications
// Two addition / operation. O(2), but we can simplify it as O(1)
function addItems(n){
    return n + n + n
}

// 4. O(log n) :Second most efficient after O(1)
// Also called Divide & Conquer

// 5. O(nlog n) : Used in some sorting algorithms
// Best efficient if we sort multiple types of data. eg strings.

//-------------------------------------------------------

//  Different Terms for Input
// n + n = 2n times: i.e O(2n) or O(n)

// What if a=1 , b = 100000
// O(a) + O(b) => O(a+b)
function printer(a, b){
    for(let i = 0;i<a;i++){
        console.log(i);
    }
    
    for(let j = 0;j<b;j++){
        console.log(j);
    }
}
printer(3)

// What if a=1 , b = 100000
// O(a) * O(b) => O(a*b)
function printer(n){
    for(let i = 0;i<n;i++){
         for(let j = 0;j<n;j++){
        console.log(i,j);
    }
    }
}

// Big O of Arrays
/* 
Push and Pop - O(1): Since it add/removes at the end of the array

Shift and Unshift - O(n) :  Since it removes the first element, each and every item has to be reinexed.
n = no. of items in the array

splice(1,0,'hi') : O(n)


Searching
Search by Values : O(n)
Search by Index : O(1)

If we want to access anything by index, array is the greatest DS
Adding or Removing item from the beginning : array is not the best DS
*/

// CHEAT SHEET LINK : https://www.bigocheatsheet.com/