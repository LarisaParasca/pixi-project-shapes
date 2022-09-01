// import {AppDefinitions} from "./definitions";
// import {ShapeAnimation} from "./animation";
// import {Shapes} from "./shapes";
// import * as PIXI from 'pixi.js';
// import InteractionEvent = PIXI.interaction.InteractionEvent;

// export class UI {
//     protected shapeOnScreen: PIXI.Text;
//     protected gravityOnScreen: PIXI.Text;

//     protected container: PIXI.Container;
//     protected animationElements: ShapeAnimation

//     constructor(container: PIXI.Container, animationElements: ShapeAnimation) {
//         this.shapeOnScreen = new PIXI.Text("");
//         this.gravityOnScreen = new PIXI.Text("");

//         this.container = container;
//         this.animationElements = animationElements;
//     }

//      /** functions to call to initialize positions and functionality for buttons */
//     drawUI() {
//         this.drawBackground();
//         this.drawButtonsForSybmols();
//         this.drawButtonsForGravity();
//         this.updateUI();
//     }

//      /** positioning the buttons for increasing/decreasing number of symbols
//      * positioning the displayer and the text inside it
//      * scalling them
//      * making the buttons responsive to interaction
//      * applying a click event and adding everything to stage
//       */
//     drawButtonsForSybmols() {

//         let leftButtonForSymbols: PIXI.Sprite = PIXI.Sprite.from('images/left.png');
//         let rightButtonForSymbols: PIXI.Sprite = PIXI.Sprite.from('images/right.png');
//         let displayerForSymbols: PIXI.Sprite = PIXI.Sprite.from('images/content.png');

//         leftButtonForSymbols.x = AppDefinitions.LEFT_BUTTON_SYMBOLS_POSITION_X;
//         leftButtonForSymbols.y = AppDefinitions.LEFT_BUTTON_SYMBOLS_POSITION_Y;
//         rightButtonForSymbols.x = AppDefinitions.RIGHT_BUTTON_SYMBOLS_POSITION_X;
//         rightButtonForSymbols.y = AppDefinitions.RIGHT_BUTTON_SYMBOLS_POSITION_Y;

//         displayerForSymbols.x = AppDefinitions.DISPLAYER_SYMBOLS_POSITION_X;
//         displayerForSymbols.y = AppDefinitions.DISPLAYER_SYMBOLS_POSITION_Y;

//         leftButtonForSymbols.scale.set(AppDefinitions.BUTTONS_SCALE_VALUE, AppDefinitions.BUTTONS_SCALE_VALUE);
//         rightButtonForSymbols.scale.set(AppDefinitions.BUTTONS_SCALE_VALUE, AppDefinitions.BUTTONS_SCALE_VALUE);

//         this.shapeOnScreen.x = AppDefinitions.TEXT_SYMBOLS_POSITION_X;
//         this.shapeOnScreen.y = AppDefinitions.TEXT_SYMBOLS_POSITION_Y;

//         leftButtonForSymbols.interactive = true;
//         rightButtonForSymbols.interactive = true;

//         leftButtonForSymbols.buttonMode = true;
//         rightButtonForSymbols.buttonMode = true;

//         leftButtonForSymbols.on(AppDefinitions.CLICK_EVENT, this.onClickleftSymbols.bind(this));
//         rightButtonForSymbols.on(AppDefinitions.CLICK_EVENT, this.onclickRightSymbols.bind(this));

//         this.container.addChild(leftButtonForSymbols);
//         this.container.addChild(rightButtonForSymbols);
//         this.container.addChild(displayerForSymbols);
//         this.container.addChild(this.shapeOnScreen);
//     }


//     /** positioning the buttons for increasing/decreasing the gravity value
//      * positioning the displayer and the text inside it
//      * scalling them
//      * making the buttons responsive to interaction
//      * applying a click event and adding everything to stage
//       */
//     drawButtonsForGravity() {

//         let displayerForGravity: PIXI.Sprite = PIXI.Sprite.from('images/content.png');
//         let leftButtonForGravity: PIXI.Sprite = PIXI.Sprite.from('images/left.png');
//         let rightButtonForGravity: PIXI.Sprite = PIXI.Sprite.from('images/right.png');

//         leftButtonForGravity.x = AppDefinitions.LEFT_BUTTON_GRAVITY_POSITION_X;
//         leftButtonForGravity.y = AppDefinitions.LEFT_BUTTON_GRAVITY_POSITION_Y;
//         rightButtonForGravity.x = AppDefinitions.RIGHT_BUTTON_GRAVITY_POSITION_X;
//         rightButtonForGravity.y = AppDefinitions.RIGHT_BUTTON_GRAVITY_POSITION_Y;

//         displayerForGravity.x = AppDefinitions.DISPLAYER_GRAVITY_POSITION_X;
//         displayerForGravity.y = AppDefinitions.DISPLAYER_GRAVITY_POSITION_Y;
//         displayerForGravity.width = AppDefinitions.DISPLAYER_GRAVITY_WIDTH;

//         leftButtonForGravity.scale.set(AppDefinitions.BUTTONS_SCALE_VALUE, AppDefinitions.BUTTONS_SCALE_VALUE);
//         rightButtonForGravity.scale.set(AppDefinitions.BUTTONS_SCALE_VALUE, AppDefinitions.BUTTONS_SCALE_VALUE);


//         this.gravityOnScreen.x = AppDefinitions.TEXT_GRAVITY_POSITION_X;
//         this.gravityOnScreen.y = AppDefinitions.TEXT_GRAVITY_POSITION_Y;

//         leftButtonForGravity.interactive = true;
//         rightButtonForGravity.interactive = true;

//         leftButtonForGravity.buttonMode = true;
//         rightButtonForGravity.buttonMode = true;

//         leftButtonForGravity.on(AppDefinitions.CLICK_EVENT, this.onClickLeftGravity.bind(this));
//         rightButtonForGravity.on(AppDefinitions.CLICK_EVENT, this.onClickRightGravity.bind(this));

//         this.container.addChild(displayerForGravity);
//         this.container.addChild(leftButtonForGravity);
//         this.container.addChild(rightButtonForGravity);
//         this.container.addChild(this.gravityOnScreen);
//     }

//     drawBackground() {
//         /** creating background behind symbols and making it responsive to a click event */
//         let symbolsBackground: PIXI.Graphics = new PIXI.Graphics;
//         symbolsBackground.beginFill(0x9C9795);
//         symbolsBackground.drawRect(0, 0, 800, 520);
//         symbolsBackground.endFill();

//         symbolsBackground.interactive = true;
//         symbolsBackground.on(AppDefinitions.CLICK_EVENT, this.onClickAnimationContainer.bind(this));

//         this.animationElements.setBackgroundAnimation(symbolsBackground);

//         /** creating background behind buttons */
//         let uiBackground: PIXI.Graphics = new PIXI.Graphics;
//         uiBackground.beginFill(0x6E6C6B);
//         uiBackground.drawRect(0, 520, 800, 80);
//         uiBackground.endFill();

//         this.container.addChild(uiBackground);
//     }

//      /** function called when the symbols background is clicked */
//     onClickAnimationContainer(evt:InteractionEvent){
//         this.animationElements.registerShape(evt.data.global)
//         this.updateUI();
//     }

//      /** function called to update the number of symbols on screen and gravity
//      *  value after they were changed from buttons */
//     updateUI() {
//         this.shapeOnScreen.text = this.animationElements.poolOfSymbols.length.toString();
//         this.gravityOnScreen.text = AppDefinitions.GRAVITY_TIME.toFixed(1);
//     }

//      /** function that removes a shape from the pool when left button is pressed
//      * and calls the function to update UI with the corresponding value on the displayer
//      */
//     onClickleftSymbols() {
//         if (this.animationElements.poolOfSymbols.length > 1) {
//             let shape: Shapes = this.animationElements.poolOfSymbols.pop() as Shapes;
//             shape.destroy();
//             this.updateUI();
//         }
//     }

//     /** function that adds an element to the pool when right button is clicked
//      * and calls the function to update UI with the corresponding value on the displayer
//      */
//     onclickRightSymbols() {
//         this.animationElements.registerShape();
//         this.updateUI();
//     }

//     /** function that decreases the value of gravity with a step defined as a variable
//      * and calls the function to update UI with the corresponding value on the displayer
//      */
//     onClickLeftGravity() {
//         AppDefinitions.GRAVITY_TIME = AppDefinitions.GRAVITY_TIME - AppDefinitions.GRAVITY_VALUE_UPDATE;
//         this.updateUI();

//     }
 
//     /** function that increases the value of gravity with a step defined as a variable
//      * and calls the function to update UI with the corresponding value on the displayer
//      */
//     onClickRightGravity() {
//         AppDefinitions.GRAVITY_TIME = AppDefinitions.GRAVITY_TIME + AppDefinitions.GRAVITY_VALUE_UPDATE;
//         this.updateUI();
//     }

// }


