"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Circle_1 = require("./Circle");
var Rectangle_1 = require("./Rectangle");
var myCircle = new Circle_1.Circle(10, 20, 30);
var myrec = new Rectangle_1.Rectangle(10, 20, 20, 40);
//This is an another way to print
var shapes = [];
shapes.push(myCircle);
shapes.push(myrec);
for (var _i = 0, shapes_1 = shapes; _i < shapes_1.length; _i++) {
    var arr = shapes_1[_i];
    console.log(arr.getInfo());
    console.log(arr.calculateArea());
}
