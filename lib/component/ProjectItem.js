"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skydapp_browser_1 = require("skydapp-browser");
const ViewUtil_1 = __importDefault(require("../view/ViewUtil"));
class ProjectItem extends skydapp_browser_1.DomNode {
    constructor(link, image, title, artist, description) {
        super(".project-item");
        this.append((0, skydapp_browser_1.el)("a", { click: () => { ViewUtil_1.default.go(`${link}`); } }, (0, skydapp_browser_1.el)(".img-container", (0, skydapp_browser_1.el)("img", { src: image, alt: title })), (0, skydapp_browser_1.el)("h6", title), (0, skydapp_browser_1.el)(".caption-container", (0, skydapp_browser_1.el)("p", artist)), (0, skydapp_browser_1.el)("p", description)));
    }
}
exports.default = ProjectItem;
//# sourceMappingURL=ProjectItem.js.map