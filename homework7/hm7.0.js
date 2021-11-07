
let a = 10;
console.log(a);
console.log(typeof a);

const a2 = 10;
console.log(a2);
console.log(typeof a2);

var a3 = 10;
console.log(a3);
console.log(typeof a3);


let b = 'goodbye';
console.log(b);
console.log(typeof b);

const b2 = 'goodbye';
console.log(b2);
console.log(typeof b2);

var b3 = 'goodbye';
console.log(b3);
console.log(typeof b3);


let c = true;
console.log(c);
console.log(typeof c);

const c2 = true;
console.log(c2);
console.log(typeof c2);

var c3 = true;
console.log(c3);
console.log(typeof c3);


let x = undefined; 
console.log(x);
console.log(typeof x);

const x2 = undefined; 
console.log(x2);
console.log(typeof x2);

var x3 = undefined; 
console.log(x3);
console.log(typeof x3);


let d = null;
console.log(d);
console.log(typeof d);

const d2 = null;
console.log(d2);
console.log(typeof d2);

var d3 = null;
console.log(d3);
console.log(typeof d3);


let e = 754854678080467n;
console.log(e);
console.log(typeof e);

const e2 = 754854678080467n;
console.log(e2);
console.log(typeof e2);

var e3 = 754854678080467n;
console.log(e3);
console.log(typeof e3);


let id = Symbol('goodmorning')
console.log(id);
console.log(typeof id);

const id2 = Symbol('goodmorning')
console.log(id2);
console.log(typeof id2);

var id3 = Symbol('goodmorning')
console.log(id3);
console.log(typeof id3);

let user = {name:'Вася'};
console.log(user);
console.log(typeof user);

const user2 = {name:'Вася'};
console.log(user2);
console.log(typeof user2);

var user3 = {name:'Вася'};
console.log(user3);
console.log(typeof user3);





let f = 10;
console.log(f);
console.log(typeof f);
let f2 = f.toString();
console.log(f2);
console.log(typeof f2);

let g = 100;
console.log(b2);
console.log(typeof b2);
let g2 = g.toString();
console.log(g2);
console.log(typeof g2);

let h = 1000;
console.log(h);
console.log(typeof h);
let h2 = h.toString();
console.log(h2);
console.log(typeof h2); 

let i = 10000;
console.log(i);
console.log(typeof i);
let i2 = i.toString();
console.log(i2);
console.log(typeof i2); 

let j = 100000;
console.log(j);
console.log(typeof j);
let j2 = j.toString();
console.log(j2);
console.log(typeof j2); 

let k = '101';
console.log(k);
console.log(typeof k);
console.log(typeof Number(k));

let l = '1001';
console.log(l);
console.log(typeof l);
console.log(typeof Number(l));

let m = '1011';
console.log(m);
console.log(typeof m);
console.log(typeof Number(m));

let n = '10111';
console.log(n);
console.log(typeof n);
console.log(typeof Number(n));

let o = '10001';
console.log(o);
console.log(typeof o);
console.log(typeof Number(o));




console.log(1 + '2') // converts the number into the string, 'BECAUSE JAVA SCRIPT IS LIKE WATER , IT TRIES TO FIND THE SHORTEST WAY TO ITS DESTINATION' - Sergiy said. So, we have 'string'+'string'.That's why it is '12' not'3'.
console.log('' + 1 + 0) // When we use '', it means that it is string, so Java Script thinks that it is string. According to this, it converts the next numbers into the strings.
console.log('' - 1 + 0) // there is no operation of minus with the string , that's why it doesn't converts the next numbers into strings and we have NUMBER as the result.
console.log('2' * '3') // there is no operation of multiplication with the string , but it робить під капотом(i don't know how to translate it) the operation of Number('2')...and as the result - we get the NUMBER.
console.log(2 + 2 + 'px') //firstly, it adds the numbers. Next, it needs to add the number and the string, that's why it converts the number into the string(as it is easier to do it in that way) and finally it adds two strings.
console.log('px' + 2 + 1) //as firstly we have the string , so the next numbers are converted into the strings too.
console.log('2' - 1) // it converts the string into the number, because there is no operation of minus with the string.
console.log('2px' - 1) //as there is no operation of minus with the string,it tries to convert the string into the number - but it can't do it because of the text and the number in the same ''.
console.log(null + 1) //null is the empty value, so it can add to this value the number.
console.log(undefined + 1) //when it tries to convert the undefined into the number js understands that it can be whatever.