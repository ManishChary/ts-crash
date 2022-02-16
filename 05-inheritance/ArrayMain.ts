import {Shape} from './Shape'
import {Circle} from './Circle';
import { Rectangle } from './Rectangle';

let myShape = new Shape(10,20);

let myCircle = new Circle(10,20,30);

let myrec = new Rectangle(10,20,20,40);

//This is an another way to print
let shapes: Shape[]= [];
shapes.push(myShape);
shapes.push(myCircle);
shapes.push(myrec);

for(let arr of shapes)
{
    console.log(arr.getInfo());
}