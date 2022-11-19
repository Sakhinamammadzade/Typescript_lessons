//************Interfaces******************/

// let travelTo=(point:{x:Number,y:Number})=>{

// }
// let getDistance=(pointA:{x:Number,y:Number},pointB:{x:Number,y:Number})=>{

// }

// travelTo(
//     x:2,
//     y:5
// })

//bu sekilde yazmaq yerine interface istifade ede bilerik

interface Point{
    x:Number,
    y:Number
}
//gondereceyimiz parametr Point interface-ne uygun olmalidi ve x,y parametrini gondermelidi

interface Passenger{
    name:string,
    phone:string
}

interface Vehicle{
    currentLocation:Point;
    travelTo(point:Point):void;//metodun imzasini yaziriq 
    getDistance(pointA:Point,pointB:Point):Number;
    addPassenger(passenger:Passenger):void;
    removePassenger(passenger:Passenger):void;
}
