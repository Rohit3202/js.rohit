let score = "33"

console.log(typeof score);
console.log(typeof(score)); //another way to print

let valueInNumber = Number(score)

console.log(valueInNumber);

//"33" => 33
//"33abc" => Nan
//"true" =>1 ; false =>0
let isloggedIn =45;
let booleanisloggedIn = Boolean(isloggedIn)
console.log(booleanisloggedIn);

//1 =>true ; 0=>false;
//" " => false;
//"Rohit" => true

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber);

// Q why string to number conversion is confusing

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2); //2res to power
// console.log(5/2); //divide
// console.log(5%2); //reminder

let str1 ="Rohit"
let str2 =" Waghmode"

let str3 = str1 + str2  //merge 2 string
// console.log(str3);

// presedence
// console.log("1"+2);      //12
// console.log(2+"2");     //22
// console.log("2"+2+2);   //222
// console.log(2+2+"2");  //42

console.log(3+4*5%3);    //do not write this not give proper output
console.log((3+4)*5%3);  // write this good practice

let num1,num2,num3;

// num1 = num2 = num3 = 2+2 //bad practice

let gameCounter = 100;
gameCounter++;
console.log(gameCounter);

//**prefex or postfix in js mdn */