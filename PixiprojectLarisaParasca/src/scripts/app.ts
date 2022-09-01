import * as PIXI from 'pixi.js'
import {MyApplication} from "./my-application";
import {AppDefinitions} from "./definitions";

interface EngineParams {
    containerId: string,
    canvasW: number,
    canvasH: number,
}

class Engine {
    public container: HTMLElement;
    public loader: PIXI.Loader;
    public renderer: PIXI.Renderer;
    public stage: PIXI.Container;
    public graphics: PIXI.Graphics;

    constructor(params: EngineParams) {
        this.loader = PIXI.Loader.shared;
        this.renderer = PIXI.autoDetectRenderer({
            width: params.canvasW,
            height: params.canvasH,
            antialias: true
        });
        this.stage = new PIXI.Container();
        this.graphics = new PIXI.Graphics();

        this.container = params.containerId ? document.getElementById(params.containerId) || document.body : document.body;
        this.container.appendChild(this.renderer.view);
    } // constructor
} // Engine

const engine = new Engine({
    containerId: 'game',
    canvasW: AppDefinitions.CANVAS_WIDTH,
    canvasH: AppDefinitions.CANVAS_HEIGHT
});

// ==============
// === STATES ===
// ==============

window.onload = load;

function load() {
    create();
} // load

function create() {
    render();
    let myApplication: MyApplication;
    myApplication = new MyApplication(engine.stage);
    myApplication.run()
} // create

function render() {
    requestAnimationFrame(render);

    /* ***************************** */
    /* Render your Game Objects here */
    /* ***************************** */

    engine.renderer.render(engine.stage);
} // render