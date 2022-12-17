"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skydapp_browser_1 = require("skydapp-browser");
const Klip_1 = __importDefault(require("../../klaytn/Klip"));
class ConnectWalletPopup extends skydapp_browser_1.Popup {
    constructor(callback) {
        super(".popup-background");
        this.append(this.content = (0, skydapp_browser_1.el)(".connect-wallet-popup", (0, skydapp_browser_1.el)(".left-container", (0, skydapp_browser_1.el)("p", "IMAGE")), (0, skydapp_browser_1.el)(".right-container", (0, skydapp_browser_1.el)(".cancel-container", { click: () => this.delete(), }, (0, skydapp_browser_1.el)("img", { src: "/images/icn/close.svg", alt: "close" })), (0, skydapp_browser_1.el)("header", (0, skydapp_browser_1.el)("h6", "Connect Wallet"), (0, skydapp_browser_1.el)("p", "KLUBS는 블록체인지갑과의 연결이 필요합니다. 카이카스 혹은 카카오톡 클립에서 연결해주시기 바랍니다.")), (0, skydapp_browser_1.el)("hr"), (0, skydapp_browser_1.el)(".button-container", (0, skydapp_browser_1.el)("a.kaikas-button", { href: "https://chrome.google.com/webstore/detail/kaikas/jblndlipeogpafnldhgmapagcccfchpi" }, (0, skydapp_browser_1.el)("img", { src: "/images/icn/kaikas.svg", alt: "kaikas" }), (0, skydapp_browser_1.el)("p", "카이카스")), (0, skydapp_browser_1.el)("a.klip-button", {
            click: async () => {
                await Klip_1.default.connect();
                callback();
                this.delete();
            },
        }, (0, skydapp_browser_1.el)("img", { src: "/images/icn/klip.svg", alt: "klip" }), (0, skydapp_browser_1.el)("p", "카카오클립")), (0, skydapp_browser_1.el)("a.cancel-button", { click: () => this.delete(), }, (0, skydapp_browser_1.el)("p", "연결하지않고 둘러보기"))))));
    }
}
exports.default = ConnectWalletPopup;
//# sourceMappingURL=ConnectWalletPopup.js.map