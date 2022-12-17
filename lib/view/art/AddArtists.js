"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skydapp_browser_1 = require("skydapp-browser");
const Layout_1 = __importDefault(require("../Layout"));
class AddArtists {
    constructor() {
        Layout_1.default.current.title = "Add Artists";
        Layout_1.default.current.content.append(this.container = (0, skydapp_browser_1.el)(".artists-add-view", (0, skydapp_browser_1.el)("section", (0, skydapp_browser_1.el)("header", (0, skydapp_browser_1.el)("h2", "Your KLUBS Artist"), (0, skydapp_browser_1.el)("h3", "Registration")), (0, skydapp_browser_1.el)("article", (0, skydapp_browser_1.el)("h6", "Contract Address"), this.addressInput = (0, skydapp_browser_1.el)("input", { placeholder: "Input Address" }), (0, skydapp_browser_1.el)(".button-wrap", (0, skydapp_browser_1.el)("a", "SIGN\nUP"))))));
    }
    changeParams(params, uri) { }
    close() {
        this.container.delete();
    }
}
exports.default = AddArtists;
//# sourceMappingURL=AddArtists.js.map