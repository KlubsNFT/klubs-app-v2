"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skydapp_browser_1 = require("skydapp-browser");
const ProjectItem_1 = __importDefault(require("../../component/ProjectItem"));
const Layout_1 = __importDefault(require("../Layout"));
const pfp_json_1 = __importDefault(require("../../data/pfp.json"));
class Pfp {
    constructor() {
        Layout_1.default.current.title = "PFP";
        Layout_1.default.current.content.append(this.container = (0, skydapp_browser_1.el)(".pfp-view", (0, skydapp_browser_1.el)("section", (0, skydapp_browser_1.el)("header", (0, skydapp_browser_1.el)(".title-cotnainer", (0, skydapp_browser_1.el)("h2", "PFP"))), this.pfpDisplay = (0, skydapp_browser_1.el)("article"))));
        this.init();
    }
    init() {
        this.loadProject();
    }
    loadProject() {
        pfp_json_1.default.map((data) => {
            this.pfpDisplay.append(new ProjectItem_1.default("/pfp/1", data.image, data.title, data.artist, data.description));
        });
    }
    changeParams(params, uri) { }
    close() {
        this.container.delete();
    }
}
exports.default = Pfp;
//# sourceMappingURL=Pfp.js.map