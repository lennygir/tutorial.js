var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Tutorialjs_instances, _Tutorialjs_options, _Tutorialjs_steps, _Tutorialjs_background, _Tutorialjs_buttonNext, _Tutorialjs_buttonPrevious, _Tutorialjs_comment, _Tutorialjs_nextListener, _Tutorialjs_previousListener, _Tutorialjs_instanciateUtils, _Tutorialjs_displaySteps, _Tutorialjs_end, _Tutorialjs_hexToRgb, _Tutorialjs_position;
import { DEFAULT_BACKGROUND_COLOR, DEFAULT_BACKGROUND_OPACITY, DEFAULT_NEXT_BUTTON_LABEL, DEFAULT_PREVIOUS_BUTTON_LABEL, DEFAULT_TEXT_COLOR, DEFAULT_TEXT_OPACITY } from './models/options.constant.js';
import { DEFAULT_COMMENT_POSITION } from './models/step.constant.js';
export class Tutorialjs {
    constructor(pSteps = [], pOptions = {}) {
        _Tutorialjs_instances.add(this);
        _Tutorialjs_options.set(this, void 0);
        _Tutorialjs_steps.set(this, void 0);
        _Tutorialjs_background.set(this, void 0);
        _Tutorialjs_buttonNext.set(this, void 0);
        _Tutorialjs_buttonPrevious.set(this, void 0);
        _Tutorialjs_comment.set(this, void 0);
        _Tutorialjs_nextListener.set(this, void 0);
        _Tutorialjs_previousListener.set(this, void 0);
        __classPrivateFieldSet(this, _Tutorialjs_options, pOptions, "f");
        __classPrivateFieldSet(this, _Tutorialjs_steps, pSteps, "f");
    }
    start() {
        __classPrivateFieldGet(this, _Tutorialjs_instances, "m", _Tutorialjs_instanciateUtils).call(this);
        __classPrivateFieldGet(this, _Tutorialjs_instances, "m", _Tutorialjs_displaySteps).call(this, 0);
    }
}
_Tutorialjs_options = new WeakMap(), _Tutorialjs_steps = new WeakMap(), _Tutorialjs_background = new WeakMap(), _Tutorialjs_buttonNext = new WeakMap(), _Tutorialjs_buttonPrevious = new WeakMap(), _Tutorialjs_comment = new WeakMap(), _Tutorialjs_nextListener = new WeakMap(), _Tutorialjs_previousListener = new WeakMap(), _Tutorialjs_instances = new WeakSet(), _Tutorialjs_instanciateUtils = function _Tutorialjs_instanciateUtils() {
    __classPrivateFieldSet(this, _Tutorialjs_background, document.createElement("div"), "f");
    __classPrivateFieldGet(this, _Tutorialjs_background, "f").style.position = 'fixed';
    __classPrivateFieldGet(this, _Tutorialjs_background, "f").style.top = '0';
    __classPrivateFieldGet(this, _Tutorialjs_background, "f").style.left = '0';
    __classPrivateFieldGet(this, _Tutorialjs_background, "f").style.width = '100vw';
    __classPrivateFieldGet(this, _Tutorialjs_background, "f").style.height = '100vh';
    const bkcolors = __classPrivateFieldGet(this, _Tutorialjs_instances, "m", _Tutorialjs_hexToRgb).call(this, __classPrivateFieldGet(this, _Tutorialjs_options, "f").backgroundColor || DEFAULT_BACKGROUND_COLOR);
    __classPrivateFieldGet(this, _Tutorialjs_background, "f").style.backgroundColor = 'rgba(' +
        bkcolors.r + ',' +
        bkcolors.g + ',' +
        bkcolors.b + ', ' +
        (__classPrivateFieldGet(this, _Tutorialjs_options, "f").backgroundOpacity || DEFAULT_BACKGROUND_OPACITY) +
        ')';
    __classPrivateFieldGet(this, _Tutorialjs_background, "f").style.zIndex = '9998';
    document.body.appendChild(__classPrivateFieldGet(this, _Tutorialjs_background, "f"));
    __classPrivateFieldSet(this, _Tutorialjs_buttonNext, document.createElement("button"), "f");
    __classPrivateFieldGet(this, _Tutorialjs_buttonNext, "f").textContent = __classPrivateFieldGet(this, _Tutorialjs_options, "f").nextButtonLabel || DEFAULT_NEXT_BUTTON_LABEL;
    __classPrivateFieldGet(this, _Tutorialjs_buttonNext, "f").style.position = 'fixed';
    __classPrivateFieldGet(this, _Tutorialjs_buttonNext, "f").style.bottom = '50px';
    __classPrivateFieldGet(this, _Tutorialjs_buttonNext, "f").style.right = '50px';
    __classPrivateFieldGet(this, _Tutorialjs_buttonNext, "f").style.zIndex = '9999';
    document.body.appendChild(__classPrivateFieldGet(this, _Tutorialjs_buttonNext, "f"));
    __classPrivateFieldSet(this, _Tutorialjs_buttonPrevious, document.createElement("button"), "f");
    __classPrivateFieldGet(this, _Tutorialjs_buttonPrevious, "f").textContent = __classPrivateFieldGet(this, _Tutorialjs_options, "f").previousButtonLabel || DEFAULT_PREVIOUS_BUTTON_LABEL;
    __classPrivateFieldGet(this, _Tutorialjs_buttonPrevious, "f").style.position = 'fixed';
    __classPrivateFieldGet(this, _Tutorialjs_buttonPrevious, "f").style.bottom = '50px';
    __classPrivateFieldGet(this, _Tutorialjs_buttonPrevious, "f").style.left = '50px';
    __classPrivateFieldGet(this, _Tutorialjs_buttonPrevious, "f").style.zIndex = '9999';
    document.body.appendChild(__classPrivateFieldGet(this, _Tutorialjs_buttonPrevious, "f"));
    __classPrivateFieldSet(this, _Tutorialjs_comment, document.createElement("p"), "f");
    __classPrivateFieldGet(this, _Tutorialjs_comment, "f").style.position = 'fixed';
    __classPrivateFieldGet(this, _Tutorialjs_comment, "f").style.zIndex = '9999';
    const textcolors = __classPrivateFieldGet(this, _Tutorialjs_instances, "m", _Tutorialjs_hexToRgb).call(this, __classPrivateFieldGet(this, _Tutorialjs_options, "f").textColor || DEFAULT_TEXT_COLOR);
    __classPrivateFieldGet(this, _Tutorialjs_comment, "f").style.color = 'rgba(' +
        textcolors.r + ',' +
        textcolors.g + ',' +
        textcolors.b + ', ' +
        (__classPrivateFieldGet(this, _Tutorialjs_options, "f").textOpacity || DEFAULT_TEXT_OPACITY) +
        ')';
    document.body.appendChild(__classPrivateFieldGet(this, _Tutorialjs_comment, "f"));
}, _Tutorialjs_displaySteps = function _Tutorialjs_displaySteps(step) {
    __classPrivateFieldGet(this, _Tutorialjs_buttonNext, "f").removeEventListener('click', __classPrivateFieldGet(this, _Tutorialjs_nextListener, "f"));
    __classPrivateFieldGet(this, _Tutorialjs_buttonPrevious, "f").removeEventListener('click', __classPrivateFieldGet(this, _Tutorialjs_previousListener, "f"));
    const element = (typeof __classPrivateFieldGet(this, _Tutorialjs_steps, "f")[step].element === 'string'
        ? document.querySelector(__classPrivateFieldGet(this, _Tutorialjs_steps, "f")[step].element)
        : __classPrivateFieldGet(this, _Tutorialjs_steps, "f")[step].element);
    if (element) {
        element.style.zIndex = '9999';
        __classPrivateFieldGet(this, _Tutorialjs_comment, "f").textContent = __classPrivateFieldGet(this, _Tutorialjs_steps, "f")[step].comment;
        __classPrivateFieldGet(this, _Tutorialjs_instances, "m", _Tutorialjs_position).call(this, element, __classPrivateFieldGet(this, _Tutorialjs_comment, "f"), __classPrivateFieldGet(this, _Tutorialjs_steps, "f")[step].position || DEFAULT_COMMENT_POSITION);
        __classPrivateFieldGet(this, _Tutorialjs_buttonNext, "f").addEventListener('click', __classPrivateFieldSet(this, _Tutorialjs_nextListener, () => {
            element.style.zIndex = null;
            if (step + 1 >= __classPrivateFieldGet(this, _Tutorialjs_steps, "f").length) {
                __classPrivateFieldGet(this, _Tutorialjs_instances, "m", _Tutorialjs_end).call(this);
            }
            else {
                __classPrivateFieldGet(this, _Tutorialjs_instances, "m", _Tutorialjs_displaySteps).call(this, step + 1);
            }
        }, "f"));
        __classPrivateFieldGet(this, _Tutorialjs_buttonPrevious, "f").addEventListener('click', __classPrivateFieldSet(this, _Tutorialjs_previousListener, () => {
            element.style.zIndex = null;
            if (step - 1 < 0) {
                __classPrivateFieldGet(this, _Tutorialjs_instances, "m", _Tutorialjs_end).call(this);
            }
            else {
                __classPrivateFieldGet(this, _Tutorialjs_instances, "m", _Tutorialjs_displaySteps).call(this, step - 1);
            }
        }, "f"));
    }
    else {
        __classPrivateFieldGet(this, _Tutorialjs_instances, "m", _Tutorialjs_end).call(this);
        console.log('Tutorialjs: Element not found.');
    }
}, _Tutorialjs_end = function _Tutorialjs_end() {
    __classPrivateFieldGet(this, _Tutorialjs_background, "f").remove();
    __classPrivateFieldGet(this, _Tutorialjs_comment, "f").remove();
    __classPrivateFieldGet(this, _Tutorialjs_buttonNext, "f").remove();
    __classPrivateFieldGet(this, _Tutorialjs_buttonPrevious, "f").remove();
}, _Tutorialjs_hexToRgb = function _Tutorialjs_hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}, _Tutorialjs_position = function _Tutorialjs_position(el, comment, option) {
    switch (option) {
        case 'top':
            comment.style.top = (el.offsetTop - comment.offsetHeight - 10) + 'px';
            comment.style.left = (el.offsetLeft + (el.offsetWidth / 2) - (comment.offsetWidth / 2)) + 'px';
            break;
        case 'left':
            comment.style.top = (el.offsetTop + (el.offsetHeight / 2) - (comment.offsetHeight / 2)) + 'px';
            comment.style.left = (el.offsetLeft - comment.offsetWidth - 10) + 'px';
            break;
        case 'right':
            comment.style.top = (el.offsetTop + (el.offsetHeight / 2) - (comment.offsetHeight / 2)) + 'px';
            comment.style.left = (el.offsetLeft + el.offsetWidth + 10) + 'px';
            break;
        default:
            comment.style.top = (el.offsetTop + el.offsetHeight + 10) + 'px';
            comment.style.left = (el.offsetLeft + (el.offsetWidth / 2) - (comment.offsetWidth / 2)) + 'px';
            break;
    }
};
//# sourceMappingURL=tutorialjs.js.map