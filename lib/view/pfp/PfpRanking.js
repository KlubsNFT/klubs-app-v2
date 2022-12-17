"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skydapp_browser_1 = require("skydapp-browser");
const Layout_1 = __importDefault(require("../Layout"));
class PfpRanking {
    constructor() {
        Layout_1.default.current.title = "PFP Ranking";
        Layout_1.default.current.content.append(this.container = (0, skydapp_browser_1.el)(".pfp-ranking-view", (0, skydapp_browser_1.el)("section", (0, skydapp_browser_1.el)("header", (0, skydapp_browser_1.el)("h2", "Top NFTs"), (0, skydapp_browser_1.el)("h3", "Last 24hours")), (0, skydapp_browser_1.el)("table", (0, skydapp_browser_1.el)("thead", (0, skydapp_browser_1.el)("tr", (0, skydapp_browser_1.el)("td", "All NFTs"), (0, skydapp_browser_1.el)("td", "Collection"), (0, skydapp_browser_1.el)("td", "Total Volume"), (0, skydapp_browser_1.el)("td", "Floor Price"), (0, skydapp_browser_1.el)("td", "Owners"), (0, skydapp_browser_1.el)("td", "Items"))), (0, skydapp_browser_1.el)("hr"), (0, skydapp_browser_1.el)("tbody", (0, skydapp_browser_1.el)("tr", (0, skydapp_browser_1.el)("td.id", "1"), (0, skydapp_browser_1.el)("td", (0, skydapp_browser_1.el)("img", { src: "title", alt: "title" }), (0, skydapp_browser_1.el)("h6", "title")), (0, skydapp_browser_1.el)("td", "850"), (0, skydapp_browser_1.el)("td", "ETH 0.04"), (0, skydapp_browser_1.el)("td", "10.0K"), (0, skydapp_browser_1.el)("td", "10.0K")))))));
    }
    changeParams(params, uri) { }
    close() {
        this.container.delete();
    }
}
exports.default = PfpRanking;
//# sourceMappingURL=PfpRanking.js.map