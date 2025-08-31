// Default behaviour
let num1 = 5;
let num2 = num1;
num1=10
//Even after num1=10 is set ,num2 still pointing 5
// This is because during declaration of num2 vaiable it was set to num1 i.e 5
console.log('Num1-', num1);
console.log('Num2-', num2);

// -------------POINTER
let obj1 = {
    value:10
};

obj1.value = 100
//Here obj2 will point to value of obj1 in memory. So it will be same value
let obj2 = obj1;

console.log('obj1-', obj1);
console.log('obj2-', obj2);