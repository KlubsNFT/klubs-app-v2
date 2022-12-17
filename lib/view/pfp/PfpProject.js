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
const klayrabbit_json_1 = __importDefault(require("../../data/klayrabbit.json"));
class PfpProject {
    constructor() {
        Layout_1.default.current.title = "PFP";
        Layout_1.default.current.content.append(this.container = (0, skydapp_browser_1.el)(".pfp-project-view", (0, skydapp_browser_1.el)("section", (0, skydapp_browser_1.el)("header", (0, skydapp_browser_1.el)(".title-cotnainer", (0, skydapp_browser_1.el)(".content", this.nameDisplay = (0, skydapp_browser_1.el)("h2", "Project name"), this.idDisplay = (0, skydapp_browser_1.el)("h3", "BY IDNAME")), (0, skydapp_browser_1.el)(".img-container", (0, skydapp_browser_1.el)("img", { src: "https://lh3.googleusercontent.com/0cdWDR5LsRf5xqwobQfI-i2oqA1XlaxqLIUpRBwLrinqeNt540wGEVSjDXFA5011R4av7WMq85KGH3wzBSPIYvI0xIw4XchZPu5W=s0", alt: "" }))), (0, skydapp_browser_1.el)(".tab-container", (0, skydapp_browser_1.el)("a.active", "All NFTs", { click: () => { ViewUtil_1.default.go("/pfp"); } }), (0, skydapp_browser_1.el)("a", "On sale", { click: () => { ViewUtil_1.default.go("/pfp/on-sale"); } }), (0, skydapp_browser_1.el)("a", "On Bid", { click: () => { ViewUtil_1.default.go("/pfp/on-bid"); } }), (0, skydapp_browser_1.el)("a", "On Offerd", { click: () => { ViewUtil_1.default.go("/pfp/offerd"); } })), (0, skydapp_browser_1.el)("hr"), (0, skydapp_browser_1.el)(".property-container", (0, skydapp_browser_1.el)(".title", (0, skydapp_browser_1.el)("h5", "Propertise")), (0, skydapp_browser_1.el)(".content", new Select_1.default())), (0, skydapp_browser_1.el)("hr")), this.pfpDisplay = (0, skydapp_browser_1.el)("article"))));
        this.init();
    }
    init() {
        this.loadProject();
    }
    loadProject() {
        this.nameDisplay.empty().appendText("KlayRabbit");
        this.idDisplay.empty().appendText("KlayRabbit");
        klayrabbit_json_1.default.map((data) => {
            this.pfpDisplay.append(new ImageItem_1.default(`/pfp/${data.address}/${data.id}`, data.image, data.title, data.artist, data.price));
        });
    }
    changeParams(params, uri) { }
    close() {
        this.container.delete();
    }
}
exports.default = PfpProject;
//# sourceMappingURL=PfpProject.js.map