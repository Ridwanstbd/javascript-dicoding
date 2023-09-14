// fundamental javascript start
// this is single comment 
console.log("hello world"); // also single comment an on left is 1. statement
/* this multiple comment 2. comment
3. variable
*/
var name = "ridwan" // penulisan lama yang ngebug
// penulisan setelah es6
let age = 23 
const address = "Duwet"
/*
4. tipe data
*/
let num = 21 // this number
let string = "qwerty"   // this String
let string2 = 'uiop' // also string
let string3 = `helo ${age}` // also string but this can include expression
let booleanTrue = true //  this boolean on condition true
let booleanFalse = false // this boolean on condition false
let empty = null // this reprectable to empty 
let age2 // this undenfined
let bigInt = 12345678112334459n // this big integer mark on n
/* 
5. Operator
*/
// unary
typeof("1") // this unary return an type of number
const car = { color : "red"} //object
delete car.color // also unary return on delete a property of car's object
// binary 
let arithmathic = 1 + 2 - 1 * 2 / 2 % 2 // this aritmatics include modulus is empty on divided
// this assignment 
let assignment = 12 
14 <= 13 
17 >= 10 
// can combine with arithmatics
num *= 2
num -= 3
/* comparison operator 
is return an boolean
*/
1 > 5
4 < 2
12 >= 13
12 <= 10
5 == '5' // comparison only value
5 != 5 // negation value
5 === "5" // comparison with type data
5 !== 5 // negation of ===
// Logical Operator
true && true // value result on side by side must same true
true || false // value must either an true
!true // logical not is result false
// ternary
4 < 5 ? "hai" : "hello" // result hai this true of conditional operator if false result hello
/*
6. control flow
*/
// if case
if(num<34){ // if case on condition 1
    // true field
}else if(num > 21) { // condition 2
    // true field
}else {
    // field of condition up there false
}
let weather = 'rain'
if( weather === 'rain'){
    console.log("carry an umbrella")
}else if(weather === 'cold'){
    console.log("wearing a jacket");
}
// switch case 
switch (weather){
    case 'rain' :
        console.log("using a umbrella");
        break;
    case 'cold':
        console.log("wearing a jacket");
        break;
    default : console.log("non"); // action default
}


/*
7. looping 
*/
const maxLoop = 10
// for
for (let counter = 1; counter < 10 ; counter++){
    console.log(counter +". hello world");
}
// while
let counter = 1
while (counter < maxLoop){
    console.log("hello world");


    counter++
}
// fundamental javascript end
// data Structure javascript start

/**
 * 1. Membuat Array 
 */
const days = ['minggu','senin','selasa','rabu']

/**
 * 2. Elemen di dalam Array diakses atau diubah melalui index(key)
 */
const day2 = days[1]
console.log(day2);
days[0] = 'Ahad'
console.log(days[0]);
console.log(days);
/**
 * 3. Elemen boleh memiliki tipe data yang berbeda
 */

/**
 * 4. tipe data array adalah object
 */



// data Structure javascript end