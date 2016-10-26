"use strict"
var argv = require('yargs')
    .usage('Usage: node $0 --l=[num] --b=[num]')
    .demand(['l','b'])
    .argv;
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

function solveRect(l,b) {
    console.log("Solving for rectangle with l = "
        + l + " and b = " + b);
    rect2(l,b, function(err,rectangle) {
        if (err) {
            console.log(err);
        }
        else {
            console.log(rectangle.area());
            console.log(rectangle.perimeter());
        }
    });
};

solveRect(argv.l, argv.b);

