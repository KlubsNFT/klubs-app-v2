"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const skydapp_browser_1 = require("skydapp-browser");
class Select extends skydapp_browser_1.DomNode {
    constructor(option) {
        super(".select");
        this.append((0, skydapp_browser_1.el)(".selected", {
            click: () => {
                if (this.ul.domElement.style.display === "block") {
                    this.ul.style({
                        display: "none",
                    });
                }
                else {
                    this.ul.style({
                        display: "block",
                    });
                }
            }
        }, this.selectedValue = (0, skydapp_browser_1.el)(".selected-value", "none"), (0, skydapp_browser_1.el)(".arrow")), this.ul = (0, skydapp_browser_1.el)("ul", (0, skydapp_browser_1.el)("li.option", "none", {
            click: () => {
                this.selectedValue.empty().appendText("none");
                this.ul.style({
                    display: "none",
                });
            }
        })));
    }
}
exports.default = Select;
//# sourceMappingURL=Select.js.map