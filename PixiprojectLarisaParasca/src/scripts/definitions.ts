  export class AppDefinitions {

    
    
    static MAX_SYMBOLS: number = 50; /**maximum number of symbols that appear on screen*/
    static GRAVITY_TIME: number = 2; /**gravity value, duration of time in which a symbol falls down */

    /**position of the buttons that will increse/decrease number of symbols displayed on screen */
    static LEFT_BUTTON_SYMBOLS_POSITION_X: number = 20;    
    static LEFT_BUTTON_SYMBOLS_POSITION_Y: number = 530;
    static RIGHT_BUTTON_SYMBOLS_POSITION_X: number = 135;
    static RIGHT_BUTTON_SYMBOLS_POSITION_Y: number = 530;

    /** position of buttons that will increse/decrease gravity value  */
    static LEFT_BUTTON_GRAVITY_POSITION_X: number = 600;
    static LEFT_BUTTON_GRAVITY_POSITION_Y: number = 530;
    static RIGHT_BUTTON_GRAVITY_POSITION_X: number = 730;
    static RIGHT_BUTTON_GRAVITY_POSITION_Y: number = 530;

    /** position of the displayers which show the number of symbols and gravity value used */
    static DISPLAYER_SYMBOLS_POSITION_X: number = 80; 
    static DISPLAYER_SYMBOLS_POSITION_Y: number = 535;
    static DISPLAYER_GRAVITY_POSITION_X: number = 665;
    static DISPLAYER_GRAVITY_POSITION_Y: number = 535;

    /** position of the texts cointained by the displayers*/
    static TEXT_SYMBOLS_POSITION_X: number = 89;
    static TEXT_SYMBOLS_POSITION_Y: number = 543;
    static TEXT_GRAVITY_POSITION_X: number = 678;
    static TEXT_GRAVITY_POSITION_Y: number = 543;

    
/** scalling the buttons */
    static DISPLAYER_GRAVITY_WIDTH: number = 60;
    static BUTTONS_SCALE_VALUE: number = 0.7;

    /** step to increase/decrease gravity */
    static GRAVITY_VALUE_UPDATE: number = 0.1;

    /** canvas size*/
    static CANVAS_WIDTH: number = 800;
    static CANVAS_HEIGHT: number = 600;

/** assigning a value for each case when generating random shapes */
    static CASE_CIRCLE: number = 0;
    static CASE_ELLIPSE: number = 1;
    static CASE_RECTANGLE: number = 2;

   /** positions where generationg shapes begin  */
    static SHAPE_ANIMATION_X_POSITION: number = 150;
    static SHAPE_ANIMATION_Y_POSITION: number = 800;
    static START_SHAPE_ANIMATION_X_POSITION: number = 800;
    static START_SHAPE_ANIMATION_Y_POSITION: number = 150;

    /** delays for of animation of the shapes */
    static VALUE_FOR_RANDOM_ANIMATION_DURATION: number = 0.5;
    static VALUE_FOR_RANDOM_ANIMATION_DELAY = 1;

    /** touch and mouse event */
    static CLICK_EVENT: string = "pointerdown";

    /** defining the type of animation  */
    static ANIMATION_TYPE: string = "power1.in";
}
