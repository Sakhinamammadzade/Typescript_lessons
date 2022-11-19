// let age:number=20;
// if(age<50)
//    age+=10

// console.log(age);
  
// let a:number[]=[43,21,53]
// const b=[5,4,2] as const

// a.push(34)
// //a.push("salam")
// console.log(a);

// type NumberOrString=number|string

// let c:(  NumberOrString | number[])[]=[42,[45]]
// c.push("asdfg")

// console.log(c);


//********************************************/
/*typescript:
superset of JS
transpiler
compiler-time Error
*/

// function introduction(name:string){
//     console.log ("name :"+name);
    
// }
// let user ="Sekine"

// introduction(user)

//************variables************ */
//let a;
//tipi any oldugu ucun istenilen tip deyer qebul ede biler

// let a:number; //olsa idi tipi deyismek olmazdi
// a=5;
// a=true;
// a="hello"

let a:number=5
let b:string="asdfg"
let c:boolean=true;
let e:any
let f:number[]=[22,1,4,2]
let g :Array<number>=[2,6,3]
let h:Array<any>=[4,2,"a",true]
let j:[string,number,boolean]=['3',5,false]//tuple


// const userName='John'
// const userFirstName='Doe'
// const userAge=32;

//  enum user{Name=0,FirstName=1,age=2}

//  let userName=user.Name;//0 index
//  let userFirstName=user.FirstName;//1
//  let age=user.age//2


//************type assertions***********/

// let message="hello world";
// let count=message.length
let message;
message='hello world'
//let count=(<string>message).length
let count=(message as string).length
console.log(count);


