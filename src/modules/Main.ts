//importing as a whole module
import * as TriangleModule from "./shapes/Triangle";
import * as CircleModule from "./shapes/Circle";
//importing from aggregating module to shorten tidy up imports
// import {Circle, Triangle} from "./Shapes"

let { Triangle } = TriangleModule;
const newTriangle = new Triangle();
newTriangle.draw();

let { Circle } = CircleModule;
const newCircle = new Circle();
newCircle.draw();
