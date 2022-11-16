// let age:number=20;
// if(age<50)
//    age+=10

// console.log(age);
  
let a:number[]=[43,21,53]
const b=[5,4,2] as const

a.push(34)
//a.push("salam")
console.log(a);
type NumberOrString=number|string
let c:(  NumberOrString | number[])[]=[42,[45]]
c.push("asdfg")

console.log(c);
