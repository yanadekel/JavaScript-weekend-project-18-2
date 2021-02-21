// Write a function called repeat_str which repeats the given string src exactly count times.
// repeatStr(6, "I") // "IIIIII"
// repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"
//////////////////////////////////////////////////////////////////
let repeat_str= (num,str) =>{
 let repeats= str.repeat(num);
 return repeats;
}


console.log(repeat_str(6,'hello'));

