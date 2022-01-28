var number = 1;
while (number <= 10) {
    console.log(number);
    number++;
}

// odd numder
console.log('Odd number');
var number = 1;
while (number <= 10) {
    console.log(number);
    number += 2;
}
// even numder
console.log('even number');
var number = 0;
while (number <= 10) {
    console.log(number);
    number += 2;
}

// array 
console.log('Array');
var array = [2, 34, 5, 6, 9, 12, 76, 23, 9, 4];
array[1] = 3;
array.push(45, 88, 99);
array.pop();
array.unshift(1, 11);
array.shift();
var i = 0;
while (i < array.length) {
    console.log(array[i]);
    i++;
}

