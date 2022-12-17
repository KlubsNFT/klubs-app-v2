"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skydapp_browser_1 = require("skydapp-browser");
const ImageItem_1 = __importDefault(require("../../component/ImageItem"));
const Layout_1 = __importDefault(require("../Layout"));
const ViewUtil_1 = __importDefault(require("../ViewUtil"));
const art_json_1 = __importDefault(require("../../data/art.json"));
class Offed {
    constructor() {
        Layout_1.default.current.title = "MyArts";
        Layout_1.default.current.content.append(this.container = (0, skydapp_browser_1.el)(".my-arts-view", (0, skydapp_browser_1.el)("section", (0, skydapp_browser_1.el)("header", this.idDisplay = (0, skydapp_browser_1.el)("h2", "Idname"), this.subIdDisplay = (0, skydapp_browser_1.el)("h3", "BY IDNAME"), (0, skydapp_browser_1.el)(".tab-container", (0, skydapp_browser_1.el)("a", "My Art List", { click: () => { ViewUtil_1.default.go("/user/my-arts"); } }), (0, skydapp_browser_1.el)("a", "On sale", { click: () => { ViewUtil_1.default.go("/user/on-sale"); } }), (0, skydapp_browser_1.el)("a", "On Bid", { click: () => { ViewUtil_1.default.go("/user/on-bid"); } }), (0, skydapp_browser_1.el)("a.active", "On Offerd", { click: () => { ViewUtil_1.default.go("/user/offerd"); } })), (0, skydapp_browser_1.el)("hr")), this.artDisplay = (0, skydapp_browser_1.el)("article"))));
        this.init();
    }
    init() {
        this.loadId();
        this.loadArts();
    }
    loadId() {
        this.idDisplay.empty().appendText("Idname");
        this.subIdDisplay.empty().appendText("BY IDNAME");
    }
    loadArts() {
        art_json_1.default.map((data) => {
            this.artDisplay.append(new ImageItem_1.default(`/arts/${data.address}`, data.image, data.title, data.artist, data.price));
        });
    }
    changeParams(params, uri) { }
    close() {
        this.container.delete();
    }
}
exports.default = Offed;
//# sourceMappingURL=Offerd.js.map