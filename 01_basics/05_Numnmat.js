//***numbers and math*****/
//numbers
const score = 400; //automatic define its no //simple pattern
const balance = new Number(100);  //specifi cast for the value is only number //new keywor create new

// console.log(score);

// console.log(balance.toString()); // convert balance number into string
// console.log(typeof(balance));

// console.log(balance.toFixed(2)); // op 100.00 specific use ecomers website to user friendly amount

const outherNumber = 23.5656
// console.log(outherNumber.toPrecision()); // precision return a string 

const hundreds = 1000000
// console.log(hundreds.toLocaleString());  //(,) inculde in number us value
// console.log(hundreds.toLocaleString('en-In')); // indian value

//*******Math******/
// console.log(Math);  //object
// console.log(Math.abs(-24));  //sirf negative valuse positive me badal jayengi

// console.log(Math.round(4.8));  //decimal ko round of karta he
// console.log(Math.ceil(4.3));   //heighest value get 5
// console.log(Math.floor(4.8)); //lowest value leta he 4

// console.log(Math.min(3,5,4,2,6));
// console.log(Math.max(3,5,4,2,6));

// console.log(Math.random()); //mostly use show value between 0 and 1
// console.log(Math.random()*10);  // *10 =>0 se 9 tak ki value denga
// console.log(Math.random()*10+1); // +1 0 value not to be print
// console.log((Math.random()*10)+1); //garenteed values confirm
// but value between inside 0 or 1

const min=10;
const max=20;
console.log(Math.random()*(max-min+1)+min);  // print in points
console.log(Math.floor(Math.random()*(max-min+1))+min);  
//min or max define so
// max-min => use to print in this range
// +1 => avoid 0 case
// +min =>the vale not be printed in .something form always print 14,12 like this