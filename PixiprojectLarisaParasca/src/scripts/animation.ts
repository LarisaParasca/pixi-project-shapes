// import {Circle, Ellipse, Rectangle, Shapes, ShapeWithSides} from "./shapes";
// import {AppDefinitions} from "./definitions";
// import {gsap} from "gsap";
// import * as PIXI from 'pixi.js';

// export class ShapeAnimation {

//     public poolOfSymbols: Shapes [] = [];
//     protected container: PIXI.Container;
//     protected animation:PIXI.Container;

//     constructor(container: PIXI.Container) {
//         this.container = container;
//         this.animation = new PIXI.Container();
//         this.container.addChild(this.animation);
//     }

//     /** function that generates a random shape */
//     public generateRandomShape() {
//         let randomShape: number = Math.floor(Math.random() * 4);
//         let shape: Shapes;
//         switch (randomShape) {
//             case AppDefinitions.CASE_CIRCLE: {
//                 shape = new Circle();
//                 break;
//             }
//             case AppDefinitions.CASE_ELLIPSE: {
//                 shape = new Ellipse();
//                 break;
//             }
//             case AppDefinitions.CASE_RECTANGLE: {
//                 shape = new Rectangle();
//                 break;
//             }
//             default: {
//                 shape = new ShapeWithSides();
//                 break;
//             }
//         }

//         return shape;
//     }

//      /** adding the background */
//     public setBackgroundAnimation(background:PIXI.Graphics){
//         this.container.addChildAt(background, 0);
//     }

//      /**  running the functions that apply animation and animate the shape*/
//     public startAnimation() {
//         this.createPoolOfShapes();
//         this.applyAnimation();
//     }

//     applyAnimation() {
//         for (var i = 0; i < AppDefinitions.MAX_SYMBOLS; i++) {
//             this.animateShape(this.poolOfSymbols[i]);
//         }
//     }

//     /** function that adds elements to pool */
//     registerShape(backgroundPointer?:Point){
//         let shape: Shapes = this.generateRandomShape();
//         shape.drawShape();
//         if(backgroundPointer) {
//             shape.updateGraphicPosition(backgroundPointer);
//         }
//         this.poolOfSymbols.push(shape);
//         this.animation.addChild(shape.graphics);
//         if (this.poolOfSymbols.length >= 1) {
//             this.animateShape(shape)
//         }
//     }

//     /** applying movement on shape */
//     animateShape(shape: Shapes) {
//         shape.isRunning = true;
//         gsap.to(shape.graphics, {
//             y: AppDefinitions.SHAPE_ANIMATION_Y_POSITION,
//             duration: AppDefinitions.GRAVITY_TIME + Math.random() * AppDefinitions.VALUE_FOR_RANDOM_ANIMATION_DURATION,
//             ease: AppDefinitions.ANIMATION_TYPE,
//             delay: Math.random() * AppDefinitions.VALUE_FOR_RANDOM_ANIMATION_DELAY,
//             onComplete: this.check.bind(this),
//             onCompleteParams: [shape]
//         });
//     }

//     /** function called when the animation is complete  */
//     check(shape: Shapes) {
//         shape.isRunning = false;
//         for (var i = 0; i < this.poolOfSymbols.length; i++) {
//             if (!this.poolOfSymbols[i].isRunning) {
//                 this.poolOfSymbols[i].reset();
//                 this.animateShape(this.poolOfSymbols[i]);
//             }
//         }
//     }

//     /** array that holds shape */
//     createPoolOfShapes() {
//         for (let i = 0; i < AppDefinitions.MAX_SYMBOLS; i++) {
//             let shape: Shapes = this.generateRandomShape();
//             shape.drawShape();
//             this.poolOfSymbols.push(shape);
//             this.animation.addChild(shape.graphics);
//         }
//     }

// }