"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skydapp_browser_1 = require("skydapp-browser");
const ImageItem_1 = __importDefault(require("../../component/ImageItem"));
const Select_1 = __importDefault(require("../../component/shared/Select"));
const Layout_1 = __importDefault(require("../Layout"));
const ViewUtil_1 = __importDefault(require("../ViewUtil"));
class PfpOnSale {
    constructor() {
        Layout_1.default.current.title = "PFP";
        Layout_1.default.current.content.append(this.container = (0, skydapp_browser_1.el)(".pfp-project-view", (0, skydapp_browser_1.el)("section", (0, skydapp_browser_1.el)("header", (0, skydapp_browser_1.el)(".title-cotnainer", (0, skydapp_browser_1.el)(".content", this.nameDisplay = (0, skydapp_browser_1.el)("h2", "Project name"), (0, skydapp_browser_1.el)("h3", "BY IDNAME")), (0, skydapp_browser_1.el)(".img-container", (0, skydapp_browser_1.el)("img", { src: "", alt: "Project name" }))), (0, skydapp_browser_1.el)(".tab-container", (0, skydapp_browser_1.el)("a", "All NFTs", { click: () => { ViewUtil_1.default.go("/pfp"); } }), (0, skydapp_browser_1.el)("a.active", "On sale", { click: () => { ViewUtil_1.default.go("/pfp/on-sale"); } }), (0, skydapp_browser_1.el)("a", "On Bid", { click: () => { ViewUtil_1.default.go("/pfp/on-bid"); } }), (0, skydapp_browser_1.el)("a", "On Offerd", { click: () => { ViewUtil_1.default.go("/pfp/offerd"); } })), (0, skydapp_browser_1.el)("hr"), (0, skydapp_browser_1.el)(".property-container", (0, skydapp_browser_1.el)(".title", (0, skydapp_browser_1.el)("h5", "Propertise")), (0, skydapp_browser_1.el)(".content", new Select_1.default())), (0, skydapp_browser_1.el)("hr")), this.pfpDisplay = (0, skydapp_browser_1.el)("article"))));
        this.init();
    }
    init() {
        this.loadProject();
    }
    loadProject() {
        this.nameDisplay.empty().appendText("ProjectName");
        this.pfpDisplay.empty().append(new ImageItem_1.default("", "", "title", "@artist ID", "0.0"));
    }
    changeParams(params, uri) { }
    close() {
        this.container.delete();
    }
}
exports.default = PfpOnSale;
//# sourceMappingURL=PfpOnSale.js.map