type User={
    id:string;
    name:string;
    lastName:string;
    age:number;
}|{
    id:string;
    name:string;
    lastName:string;
}

//age? or |{}new type is the same meaning


let user:User={
   id:'2',
   name:"Sekine",
   lastName:"Memmedzade",
   age:20
}

let user2:User={
    id:'2',
    name:"sakina",
    lastName:'mammadzade'
}