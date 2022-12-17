"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skydapp_browser_1 = require("skydapp-browser");
const Layout_1 = __importDefault(require("../Layout"));
class UpdateArtists {
    constructor() {
        Layout_1.default.current.title = "Update Artists";
        Layout_1.default.current.content.append(this.container = (0, skydapp_browser_1.el)(".artists-update-view", (0, skydapp_browser_1.el)("section", (0, skydapp_browser_1.el)("header", (0, skydapp_browser_1.el)("h2", "Info Update")), (0, skydapp_browser_1.el)("article", (0, skydapp_browser_1.el)("hr"), (0, skydapp_browser_1.el)("form", (0, skydapp_browser_1.el)(".input-container", (0, skydapp_browser_1.el)("label", "Icon Image"), this.fileInput = (0, skydapp_browser_1.el)("input", { placeholder: "Click here and upload the image", type: "file" })), (0, skydapp_browser_1.el)(".input-container", (0, skydapp_browser_1.el)("label", "Artist Name"), this.nameInput = (0, skydapp_browser_1.el)("input", { placeholder: "Write name" })), (0, skydapp_browser_1.el)(".input-container", (0, skydapp_browser_1.el)("label", "Twitter Link"), this.twitterInput = (0, skydapp_browser_1.el)("input", { placeholder: "Write twitter" })), (0, skydapp_browser_1.el)(".input-container", (0, skydapp_browser_1.el)("label", "Web site"), this.webInput = (0, skydapp_browser_1.el)("input", { placeholder: "Write website" })), (0, skydapp_browser_1.el)(".input-container", (0, skydapp_browser_1.el)("label", "Email"), this.emailInput = (0, skydapp_browser_1.el)("input", { placeholder: "Write email" })), (0, skydapp_browser_1.el)(".input-container", (0, skydapp_browser_1.el)("label", "Bio"), this.bioInput = (0, skydapp_browser_1.el)("input", { placeholder: "Wrte here maximum 1,000 letters" }))), (0, skydapp_browser_1.el)("hr"), (0, skydapp_browser_1.el)(".royalty-container", (0, skydapp_browser_1.el)("form", (0, skydapp_browser_1.el)("h6", "Update Resale Royalty"), (0, skydapp_browser_1.el)(".content", (0, skydapp_browser_1.el)("p", "Resale Royalty Commission (%)"), (0, skydapp_browser_1.el)("p", "Resale Royalty can be set unto 10% with two decimal places.")), (0, skydapp_browser_1.el)(".input-container", (0, skydapp_browser_1.el)("label", "Set Royalty"), this.royaltyInput = (0, skydapp_browser_1.el)("input", { placeholder: "Write Royalty" })))), (0, skydapp_browser_1.el)("hr"), (0, skydapp_browser_1.el)(".button-wrap", (0, skydapp_browser_1.el)("a", "SAVE"))))));
    }
    changeParams(params, uri) { }
    close() {
        this.container.delete();
    }
}
exports.default = UpdateArtists;
//# sourceMappingURL=UpdateArtist.js.map