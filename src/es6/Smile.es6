import { DisplayObject } from './DisplayObject.es6';

export class Smile extends DisplayObject {

    constructor() {
        super();

        this.colors = ["#ffcc00", "#ff5500"];
        this.colorIndex = 0;

        $(this.html).on('dragEnd', () => {
            this.onDragEnd();
        });

        $(this.html).on('staticClick', () => {
            this.switchColor();
        });
    }

    onDragEnd() {
        if (this.box.readyForDrop()) {
            this.box.placeSmile(this);
        }
    }

    createHtml() {
        super.createHtml();

        let html = document.createElement('div');
        html.className = "smile-base draggable";

        let eyeLeft = document.createElement('div');
        eyeLeft.className = "smile-eye-left";
        html.appendChild(eyeLeft);

        let eyeRight = document.createElement('div');
        eyeRight.className = "smile-eye-right";
        html.appendChild(eyeRight);

        let mouth = document.createElement('div');
        mouth.className = "smile-mouth";
        html.appendChild(mouth);

        return html;
    }

    switchColor() {
        this.colorIndex = (this.colorIndex + 1) % this.colors.length;
        let color = this.colors[this.colorIndex];
        this.html.style['background-color'] = color;
    }
}

window.Smile = Smile;