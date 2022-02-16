import {Shape} from './Shape';
import {Circle} from './Circle';
import { Rectangle } from './Rectangle';

let myShape = new Shape(10,20);
console.log(myShape.getInfo());

let myCircle = new Circle(10,20,30);
console.log(myCircle.getInfo());

let myRect = new Rectangle(10,20,2,4);
console.log(myRect.getInfo());