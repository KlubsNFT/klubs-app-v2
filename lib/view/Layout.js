"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skydapp_browser_1 = require("skydapp-browser");
const MobileMenu_1 = __importDefault(require("../component/shared/menu/MobileMenu"));
const PCMenu_1 = __importDefault(require("../component/shared/menu/PCMenu"));
const UserInfo_1 = __importDefault(require("../component/shared/menu/UserInfo"));
class Layout {
    constructor() {
        Layout.current = this;
        skydapp_browser_1.BodyNode.append((this.container = (0, skydapp_browser_1.el)(".layout", (0, skydapp_browser_1.el)("header", (0, skydapp_browser_1.el)(".nav", (0, skydapp_browser_1.el)(".logo", (0, skydapp_browser_1.el)("a", { href: "/" }, (0, skydapp_browser_1.el)("img", { src: "/images/logo/klubs.svg", alt: "KLUBS LOGO" }))), new PCMenu_1.default(), new MobileMenu_1.default(), (0, skydapp_browser_1.el)(".right", new UserInfo_1.default(), (0, skydapp_browser_1.el)("a.mobile-info", (0, skydapp_browser_1.el)("img", { src: "/images/icn/profile.svg", alt: "profile" }))))), (0, skydapp_browser_1.el)("main", (this.content = (0, skydapp_browser_1.el)(".content"))), (0, skydapp_browser_1.el)("footer"))));
    }
    set title(title) {
        document.title = `${title} | KLUBS`;
    }
    changeParams(params, uri) { }
    close() {
        this.container.delete();
    }
}
exports.default = Layout;
//# sourceMappingURL=Layout.js.map