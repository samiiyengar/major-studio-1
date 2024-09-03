/*
  Exercise 2
  JavaScript quirks and tricks
*/

var schoolName = "Parsons";
var schoolYear = 1936;

// Task
// What is the value of test3?
var test1;
if (1 == true) { // == type converts so it becomes if 1 == 1
  test1 = true; // so this is true
} else {
  test1 = false;
}

var test2;
if (1 === true) { // === doesn't type convert so this is false
  test2 = true;
} else {
  test2 = false; // so this is true
}

var test3 = test1 === test2; // we know test1 is true and test2 is false
// test3 = false

// Task
// Change this code so test4 is false and test5 is true. Use console.log() to confirm your cod works.

var test4 = 0 == "hi";
var test5 = 1 == "1";

console.log("test4 is", test4, "and test 5 is", test5);

// Task
// What are the values of p, q, and r? Research what is going on here.
var w = 0.1;
var x = 0.2;
var y = 0.4;
var z = 0.5;

var p = w + x; // 0.1 + 0.2 = 0.3

var q = z - x; // 0.5 - 0.2 = 0.3

var r = y - w; // 0.4 - 0.1 = 0.3

console.log(p, q, r); // after running this, we get 0.30000000000000004 0.3 0.30000000000000004
// due to the way floats are represented in JS?
