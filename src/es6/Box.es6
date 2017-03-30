import { DisplayObject } from './DisplayObject.es6';

export class Box extends DisplayObject {

    constructor() {
        super();
        this.hover = false;

        $(this.html).on('mouseenter', () => {
            this.hover = true;
        });

        $(this.html).on('mouseleave', () => {
            this.hover = false;
        });
    }

    createHtml() {
        super.createHtml();

        let html = document.createElement('div');
        html.className = "box";

        return html;
    }

    placeSmile(smile) {
        let rectBox = this.getBoundsRect();
        let rectSmile = smile.getBoundsRect();

        smile.html.style.left = rectBox.left + rectBox.width / 2 - rectSmile.width / 2 + 'px';
        smile.html.style.top = rectBox.top - rectSmile.height * 0.2 + 'px';

        this.html.style.zIndex = 1;
        smile.html.style.zIndex = 0;
    }

    readyForDrop() {
        return this.hover;
    }
}

window.Box = Box;