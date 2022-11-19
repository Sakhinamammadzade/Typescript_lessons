interface Point{
    x:Number,
    y:Number
}


interface Vehicle{
    currentLocation:Point;
    travelTo(point:Point):void;

  
}

class Taxi1 implements Vehicle{

     Color:string;
    constructor(location:Point, color :string) {
       this.currentLocation=location;
       this.Color=color
        
    }
    currentLocation:Point;
    travelTo(point:Point):void{
      console.log(`Taksi x:${point.x}den ${point.y} adresine gedir`);
      
    }
   
}




let taxi_1: Taxi1=new Taxi1({x:3,y:5},"red");
Taxi_1.travelTo({x:1,y:2});
console.log(taxi_1.currentLocation);

console.log(Taxi_1.currentLocation.x);
console.log(Taxi_1.currentLocation.y);


// let taxi_2:Taxi1=new Taxi1({x:4,y:3})

// let taxi_3:Taxi1=new Taxi1()

