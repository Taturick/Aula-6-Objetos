const array = [1,2,3,4,5,6,7,8,9]

//const a = array[0];
//const b = array[1];
//const c = array[2];

const [a ,b, ...resto] = array;
console.log(a)
console.log(b)
console.log(resto)