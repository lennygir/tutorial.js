import { Options } from './models/options.model';
import { Step, StepOptions } from './models/step.model';

import { DEFAULT_BACKGROUND_COLOR, DEFAULT_BACKGROUND_OPACITY, DEFAULT_NEXT_BUTTON_LABEL, DEFAULT_PREVIOUS_BUTTON_LABEL, DEFAULT_TEXT_COLOR, DEFAULT_TEXT_OPACITY } from './models/options.constant';
import { DEFAULT_COMMENT_FONT_SIZE, DEFAULT_COMMENT_FONT_WEIGHT, DEFAULT_COMMENT_GAP, DEFAULT_COMMENT_POSITION } from './models/step.constant';

export class Tutorialjs {

    #options: Options;
    #steps: Step[];

    #background: HTMLElement;
    #buttonNext: HTMLElement;
    #buttonPrevious: HTMLElement;
    #comment: HTMLElement;

    #nextListener: () => void;
    #previousListener: () => void;

    constructor(pSteps: Step[] = [], pOptions: Options = {}) {
        this.#options = pOptions;
        this.#steps = pSteps;
    }

    public start(): void {
        // Instanciate background
        this.#instanciateUtils();
        // Display steps
        this.#displaySteps(0);
    }

    #instanciateUtils(): void {
        this.#background = document.createElement("div");
        this.#background.style.position = 'fixed';
        this.#background.style.top = '0';
        this.#background.style.left = '0';
        this.#background.style.width = '100vw';
        this.#background.style.height = '100vh';
        const bkcolors = this.#hexToRgb(this.#options.backgroundColor || DEFAULT_BACKGROUND_COLOR);
        this.#background.style.backgroundColor = 'rgba(' +
            bkcolors.r + ',' +
            bkcolors.g + ',' +
            bkcolors.b + ', ' +
            (this.#options.backgroundOpacity || DEFAULT_BACKGROUND_OPACITY) +
        ')';
        this.#background.style.zIndex = '9998';
        document.body.appendChild(this.#background);

        this.#buttonNext = document.createElement("button");
        this.#buttonNext.textContent = this.#options.nextButtonLabel || DEFAULT_NEXT_BUTTON_LABEL;
        this.#buttonNext.style.position = 'fixed';
        this.#buttonNext.style.bottom = '50px';
        this.#buttonNext.style.right = '50px';
        this.#buttonNext.style.zIndex = '9999';
        document.body.appendChild(this.#buttonNext);

        this.#buttonPrevious = document.createElement("button");
        this.#buttonPrevious.textContent = this.#options.previousButtonLabel || DEFAULT_PREVIOUS_BUTTON_LABEL;
        this.#buttonPrevious.style.position = 'fixed';
        this.#buttonPrevious.style.bottom = '50px';
        this.#buttonPrevious.style.left = '50px';
        this.#buttonPrevious.style.zIndex = '9999';
        document.body.appendChild(this.#buttonPrevious);

        this.#comment = document.createElement("p");
        this.#comment.style.position = 'fixed';
        this.#comment.style.zIndex = '9999';
        const textcolors = this.#hexToRgb(this.#options.textColor || DEFAULT_TEXT_COLOR);
        this.#comment.style.color = 'rgba(' +
            textcolors.r + ',' +
            textcolors.g + ',' +
            textcolors.b + ', ' +
            (this.#options.textOpacity || DEFAULT_TEXT_OPACITY) +
        ')';
        document.body.appendChild(this.#comment);
    }

    #displaySteps(step: number): void {

        // Removing event listeners
        this.#buttonNext.removeEventListener('click', this.#nextListener);
        this.#buttonPrevious.removeEventListener('click', this.#previousListener);

        const element = (typeof this.#steps[step].element === 'string'
            ? document.querySelector(this.#steps[step].element as string)
            : this.#steps[step].element) as HTMLElement;

        if(element) {
            element.style.zIndex = '9999';
            this.#comment.textContent = this.#steps[step].comment;
            this.#comment.style.fontWeight = this.#steps[step].option?.fontweight || DEFAULT_COMMENT_FONT_WEIGHT;
            this.#comment.style.fontSize = this.#steps[step].option?.fontsize || DEFAULT_COMMENT_FONT_SIZE;
            this.#position(element, this.#comment, this.#steps[step].option);

            this.#buttonNext.addEventListener('click', this.#nextListener = () => {
                element.style.zIndex = null;
                if(step + 1 >= this.#steps.length) {
                    this.#end();
                } else {
                    this.#displaySteps(step + 1);
                }
            });

            this.#buttonPrevious.addEventListener('click', this.#previousListener = () => {
                element.style.zIndex = null;
                if(step - 1 < 0) {
                    this.#end();
                } else {
                    this.#displaySteps(step - 1);
                }
            });
        } else {
            this.#end();
            console.log('Tutorialjs: Element not found.')
        }
    }

    #end(): void {
        this.#background.remove();
        this.#comment.remove();
        this.#buttonNext.remove();
        this.#buttonPrevious.remove();
    }

    #hexToRgb(hex: string): {r: number, g: number, b: number} {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
    }

    #position(el: HTMLElement, comment: HTMLElement, option: StepOptions): void {
        const gap = option?.gap || DEFAULT_COMMENT_GAP;
        switch(option?.position || DEFAULT_COMMENT_POSITION) {
            case 'top':
                comment.style.top = (el.offsetTop - comment.offsetHeight - gap) + 'px';
                comment.style.left = (el.offsetLeft + (el.offsetWidth / 2) - (comment.offsetWidth / 2)) + 'px';
                break;
            case 'left':
                comment.style.top = (el.offsetTop + (el.offsetHeight / 2) - (comment.offsetHeight / 2)) + 'px';
                comment.style.left = (el.offsetLeft - comment.offsetWidth - gap) + 'px';
                break;
            case 'right':
                comment.style.top = (el.offsetTop + (el.offsetHeight / 2) - (comment.offsetHeight / 2)) + 'px';
                comment.style.left = (el.offsetLeft + el.offsetWidth + gap) + 'px';
                break;
            default: // Bottom and unrecognized values
                comment.style.top = (el.offsetTop + el.offsetHeight + gap) + 'px';
                comment.style.left = (el.offsetLeft + (el.offsetWidth / 2) - (comment.offsetWidth / 2)) + 'px';
                break;
        }
    }
}