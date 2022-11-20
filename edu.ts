// type User={
//     id:string;
//     name:string;
//     lastName:string;
//     age:number;
// }|{
//     id:string;
//     name:string;
//     lastName:string;
// }

//age? or |{}new type is the same meaning

// interface IIDContainer{
//     id:number;
// }//base interfaces
// interface INamedEntity{
//       firstname:string;
//     lastName:string;
// }
// interface IAuditableEntity{
//   cratedDate:Date;
//   createdBy:string;
//   modifiedDate?:Date;
//   modifiedBy?:string
// }

// interface IUser extends IIDContainer,INamedEntity{
//    age:number;
// }

// interface IAdmin extends IIDContainer,INamedEntity{
//     CategoryId:number[];
// }
// interface ICustomer extends IIDContainer ,INamedEntity,IAuditableEntity{
//    city:string
   
// }

// let Customer :ICustomer={
//     id:3,
//     firstname:"John",
//     lastName:'Doe',
//     city:'America',
//     createdBy:"Admin",
//     cratedDate:new Date("05/11/2022"),

// }

// let namedEntity:INamedEntity=Customer
// let idContainer:IIDContainer=Customer




// type User={
//     id:number;
//     name:string;
//     lastName:string;
//     age?:number;
// }
// type Admin={
//     id:number;
//     name:string;
//     lastName:string;
//     CategoryId:number[];
// }

// let user:IUser={
//    id:2,
//    firstname:"Sakina",
//    lastName:"Mammadzade",
//    age:21
// }
// let user3:User|Admin={
//     id:3,
//     name:"Admin",
//     lastName:"Admin",
//     age:32,
//     CategoryId:[3,4,2]
// }

// let user4:IUser|IAdmin={
//     id:4,
//     firstname:'Admin2',
//     lastName:"Admin2",
//     CategoryId:[3,4,5]
// }


// let user2:User={
//     id:6,
//     name:"sakina",
//     lastName:'mammadzade'
// }

///************************************/

interface IAnimal{
    id:number;
    name:string;
    age:number;
    owner?:string;
}
interface ICat extends IAnimal{
  breed:string
}
interface IDog  extends IAnimal{
    breed:string
    suitSize:number
}

interface ISnake  extends IAnimal{
    typeId:number
}
interface IBird  extends IAnimal{
    typeId:number,
    categoryId:number
}

let cat:ICat={
    id:1,
    name:"Tom",
    age:3,
    owner:'John Doe',
    breed:'unknown'
    
}
let dog:IDog={
   id:2,
   name:"Bobby",
   age:6,
   owner:'John Doe',
   breed:'golden',
   suitSize:5
}
let snake:ISnake={
   id:6,
   name:"snakyy",
   age:2,
   typeId:3
}

let bird:IBird={
    age:1,
    categoryId:3,
    id:6,
    name:"Gosha",
    typeId:2,
    owner:'Jane Don'
}

function sendCommercial(owner:string){
   console.log(cat.owner);
}

//upcast just combine a lot of object inside one array 
let animals:IAnimal[]=[cat,dog,snake,bird];

for(let animal of animals){
    if(animal.owner!==undefined){
        sendCommercial(animal.owner)
     }
}

// we are using some base entity insideof our array,if we need of some specific inside of this general stuff we can use downcust it helps of type guards sometging like this=>isDog
for(let animal of animals){
    //if animals contains some property it will be true just dont read some condition in the if
     console.log(typeof animal);
     
    if(animal.owner){
        sendCommercial(animal.owner)
     }
     else{
        console.log( `${animal.owner}not exist`);
        
     }
     if(isDog(animal)){
        console.log("it is a dog");
        console.log(animal); animal.suitSize
        
        
     }
}
//only safe for downcust is create type guard as =>object is IDog

function isDog(object:any): object is IDog{
  return 'Breed' in object && 'suitSize' in object
 
}

/*
for(let animals of animals){
 if(animal.owner!==undefined){
    sendCommercial(animal.owner)
 }
}
 */