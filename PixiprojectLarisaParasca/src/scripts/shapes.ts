// import * as PIXI from 'pixi.js';
// import {AppDefinitions} from "./definitions";

// export class Shapes {
//     protected randomColor: number;
//     public graphics: PIXI.Graphics;
//     protected startX: number;
//     protected startY: number;
//     public isRunning: boolean;

//     constructor() {
//         this.startX = AppDefinitions.START_SHAPE_ANIMATION_X_POSITION;
//         this.startY = AppDefinitions.START_SHAPE_ANIMATION_Y_POSITION;
//         this.randomColor = this.generateRandomColor();
//         this.graphics = new PIXI.Graphics();
//         this.isRunning = false;
//         this.graphics.interactive = true;
//         this.graphics.buttonMode = true;
//         this.graphics.on(AppDefinitions.CLICK_EVENT, this.onClickOnShape.bind(this));
//     }
// /** function that will generate a random color */
//     generateRandomColor() {
//         let randomColor: number = Math.floor(Math.random() * 16777215)
//         return randomColor;
//     }


//     reset() {
//         this.graphics.visible = true;
//         this.graphics.x = Math.random() * this.startX;
//         this.graphics.y = -this.startY;
//         this.isRunning = false;
//     }

//     /**function to call to subtract a shape  */
//     destroy() {
//         this.isRunning = false;
//     }

//     /** function that generates x and y position of the mouse */
//     updateGraphicPosition(backgroundPointer:Point){
//         this.graphics.x = backgroundPointer.x;
//         this.graphics.y = backgroundPointer.y;
//     }

//     drawShape() {

//     }

//     /** function that responds to click and makes a shape not visible */
//     onClickOnShape() {
//        this.graphics.visible = false;
//     }
// }
//  /** drawing a circle  */
// export class Circle extends Shapes {

//     drawShape() {
//         this.graphics.beginFill(this.randomColor);
//         this.graphics.drawCircle(0,0, 50);
//         this.graphics.endFill();
//         this.graphics.x = Math.random() * this.startX;
//         this.graphics.y = -this.startY
//     }
// }

// /** drawing an ellipse */
// export class Ellipse extends Shapes {

//     drawShape() {
//         this.graphics.beginFill(this.randomColor);
//         this.graphics.drawEllipse(0,0, 80, 50);
//         this.graphics.endFill();
//         this.graphics.x = Math.random() * this.startX;
//         this.graphics.y = -this.startY
//     }
// }

// /** drawing shapes with random number of sides */
// export class ShapeWithSides extends Shapes {

//     drawShape() {
//         this.graphics.beginFill(this.randomColor);
//         this.graphics.drawStar(0,0, 3 + Math.floor(Math.random() * 4), 50);
//         this.graphics.endFill();
//         this.graphics.x = Math.random() * this.startX;
//         this.graphics.y = -this.startY
//     }
// }
// /** drawing a rectangle */
// export class Rectangle extends Shapes {

//     drawShape() {
//         this.graphics.beginFill(this.randomColor);
//         this.graphics.drawRect(0,0, 50, 50);
//         this.graphics.endFill();
//         this.graphics.x = Math.random() * this.startX;
//         this.graphics.y = -this.startY
//     }
// }