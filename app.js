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
var a = 5;
var b = "asdfg";
var c = true;
var e;
var f = [22, 1, 4, 2];
var g = [2, 6, 3];
var h = [4, 2, "a", true];
var j = ['3', 5, false]; //tuple
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
var message;
message = 'hello world';
//let count=(<string>message).length
var count = message.length;
console.log(count);
