//************functions***********/
// function getAvarage(a:number,b:number,c?:number):string {
//     let total=a+b;
//     let count=2;
//     if( typeof c!=='undefined'){
//         total+=c;
//         count++;
//     }
//     const result =total/count
//     return "result "+result
// }
//:string funksiyadan alinan deyerin string olmasi ucundu
//parametrden asili olmadan yazsaq
function getAvarage() {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    var total = 0;
    var count = 0;
    for (var i = 0; i < a.length; i++) {
        total += a[i];
        count++;
    }
    var result = total / count;
    return result;
}
getAvarage(54, 21, 43);
getAvarage(54, 21);
getAvarage(54, 21, 43, 54, 22);
