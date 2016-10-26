"use strict"
var rect = require('./rectangl-1')
var rect2 = require('./rectangl-2')
// console.log(rect);
// function solvRect(l, b) {
//     console.log("Solving for rectangle l = " + l + " and b = " + b);
//     if (l < 0 || b < 0) {
//         console.log("l=", l, "b=", b);
//     } else {
//         console.log("perimeter:", rect.perimeter(l, b));
//         console.log("area", rect.area(l, b));
//     }
// }
// solvRect(2, 3);
// solvRect(-1, 5);
// solvRect(2, 4);
rect2(0,0,function(err,res){
    if(err){
        console.log(err);
    }
    else
        console.log(res.area(2,4));
        console.log(res.perimeter(2,4));
})
