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
class ArtOnSale {
    constructor() {
        Layout_1.default.current.title = "Art";
        Layout_1.default.current.content.append(this.container = (0, skydapp_browser_1.el)(".art-view", (0, skydapp_browser_1.el)("section", (0, skydapp_browser_1.el)("header", (0, skydapp_browser_1.el)("h2", "Crypto Art"), (0, skydapp_browser_1.el)(".tab-container", (0, skydapp_browser_1.el)("a", "All NFTs", { click: () => { ViewUtil_1.default.go("/arts"); } }), (0, skydapp_browser_1.el)("a.active", "On sale", { click: () => { ViewUtil_1.default.go("/arts/on-sale"); } }), (0, skydapp_browser_1.el)("a", "On Bid", { click: () => { ViewUtil_1.default.go("/arts/on-bid"); } }), (0, skydapp_browser_1.el)("a", "On Offerd", { click: () => { ViewUtil_1.default.go("/arts/offerd"); } })), (0, skydapp_browser_1.el)("hr")), this.artDisplay = (0, skydapp_browser_1.el)("article"))));
        this.init();
    }
    init() {
        this.loadProject();
    }
    loadProject() {
        art_json_1.default.map((data) => {
            this.artDisplay.append(new ImageItem_1.default("/arts/1", data.image, data.title, data.artist, data.price));
        });
    }
    changeParams(params, uri) { }
    close() {
        this.container.delete();
    }
}
exports.default = ArtOnSale;
//# sourceMappingURL=ArtOnSale.js.map