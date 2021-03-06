"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SkyNode_1 = __importDefault(require("./SkyNode"));
class DomNode extends SkyNode_1.default {
    constructor(domElement) {
        super();
        this.domElement = domElement;
        this.children = [];
    }
    append(...nodes) {
        super.append(...nodes);
        const fragment = new DocumentFragment();
        for (const node of nodes) {
            fragment.append(node.domElement);
        }
        this.domElement.append(fragment);
    }
    appendTo(node, index) {
        super.appendTo(node, index);
        if (index < this.children.length) {
            this.domElement.insertBefore(node.domElement, this.children[index].domElement);
        }
        else {
            this.domElement.append(node.domElement);
        }
    }
    on(eventName, eventHandler) {
        this.domElement.addEventListener(eventName, eventHandler);
        super.on(eventName, eventHandler);
    }
    off(eventName, eventHandler) {
        this.domElement.removeEventListener(eventName, eventHandler);
        super.off(eventName, eventHandler);
    }
    delete() {
        this.domElement.remove();
        super.delete();
    }
}
exports.default = DomNode;
//# sourceMappingURL=DomNode.js.map