"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Shape_1 = require("./Shape");
var Circle_1 = require("./Circle");
var Rectangle_1 = require("./Rectangle");
var myShape = new Shape_1.Shape(10, 20);
var myCircle = new Circle_1.Circle(10, 20, 30);
var myrec = new Rectangle_1.Rectangle(10, 20, 20, 40);
//This is an another way to print
var array = [];
array.push(myShape);
array.push(myCircle);
array.push(myrec);
for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
    var arr = array_1[_i];
    console.log(arr.getInfo());
}
