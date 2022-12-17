"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skydapp_browser_1 = require("skydapp-browser");
const Layout_1 = __importDefault(require("../Layout"));
const art_json_1 = __importDefault(require("../../data/art.json"));
class ArtDetail {
    constructor(params) {
        const addr = params.addr;
        Layout_1.default.current.title = "Art Detail";
        Layout_1.default.current.content.append(this.container = (0, skydapp_browser_1.el)(".art-detail-view", (0, skydapp_browser_1.el)("section", (0, skydapp_browser_1.el)("header", (0, skydapp_browser_1.el)("hr"), (0, skydapp_browser_1.el)(".img-container", this.imageDisplay = (0, skydapp_browser_1.el)("img", { src: art_json_1.default[addr].image, alt: "test" })), (0, skydapp_browser_1.el)("hr")), (0, skydapp_browser_1.el)("article", (0, skydapp_browser_1.el)(".title-container", this.titleDisplay = (0, skydapp_browser_1.el)("h2", "title"), (0, skydapp_browser_1.el)(".info-container", (0, skydapp_browser_1.el)(".content", this.dateDisplay = (0, skydapp_browser_1.el)("span", "Minterd on Apr 6, 2022"), this.priceDisplay = (0, skydapp_browser_1.el)("p", "Price : 300")), (0, skydapp_browser_1.el)("a", "Collect"))), (0, skydapp_browser_1.el)(".caption-container", (0, skydapp_browser_1.el)(".artist-container", (0, skydapp_browser_1.el)("h6", "Artist"), this.artistDisplay = (0, skydapp_browser_1.el)("p", "Artist")), (0, skydapp_browser_1.el)(".owner-container", (0, skydapp_browser_1.el)("h6", "Owner"), this.ownerDisplay = (0, skydapp_browser_1.el)("p", "Owner"))), (0, skydapp_browser_1.el)(".content", (0, skydapp_browser_1.el)(".description-container", (0, skydapp_browser_1.el)("h6", "Description"), this.descriptionDisplay = (0, skydapp_browser_1.el)("p", "Description")), (0, skydapp_browser_1.el)(".history-container", (0, skydapp_browser_1.el)("h6", "Transaction History"), this.transactionDisplay = (0, skydapp_browser_1.el)("p", "0x33333222ddddd ->  0x33333222ddddd 2022.06.22 111 by 0x8eedx")))))));
        this.init(parseInt(addr, 10));
    }
    init(addr) {
        this.imageDisplay.empty().append();
        this.titleDisplay.empty().appendText(art_json_1.default[addr].title);
        this.priceDisplay.empty().appendText(art_json_1.default[addr].price);
        this.artistDisplay.empty().appendText(art_json_1.default[addr].artist);
    }
    changeParams(params, uri) { }
    close() {
        this.container.delete();
    }
}
exports.default = ArtDetail;
//# sourceMappingURL=ArtDetail.js.map