"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skydapp_browser_1 = require("skydapp-browser");
const skydapp_common_1 = require("skydapp-common");
const superagent_1 = __importDefault(require("superagent"));
const Wallet_1 = __importDefault(require("./klaytn/Wallet"));
const AddArtists_1 = __importDefault(require("./view/art/AddArtists"));
const art_1 = __importDefault(require("./view/art/art"));
const ArtDetail_1 = __importDefault(require("./view/art/ArtDetail"));
const ArtOfferd_1 = __importDefault(require("./view/art/ArtOfferd"));
const ArtOnBid_1 = __importDefault(require("./view/art/ArtOnBid"));
const ArtOnSale_1 = __importDefault(require("./view/art/ArtOnSale"));
const UpdateArtist_1 = __importDefault(require("./view/art/UpdateArtist"));
const Home_1 = __importDefault(require("./view/Home"));
const Layout_1 = __importDefault(require("./view/Layout"));
const AddByPfpMinter_1 = __importDefault(require("./view/pfp/AddByPfpMinter"));
const AddByPfpOther_1 = __importDefault(require("./view/pfp/AddByPfpOther"));
const AddByPfpOwner_1 = __importDefault(require("./view/pfp/AddByPfpOwner"));
const Pfp_1 = __importDefault(require("./view/pfp/Pfp"));
const PfpDetail_1 = __importDefault(require("./view/pfp/PfpDetail"));
const PfpProject_1 = __importDefault(require("./view/pfp/PfpProject"));
const PfpRanking_1 = __importDefault(require("./view/pfp/PfpRanking"));
const MyArts_1 = __importDefault(require("./view/user/MyArts"));
const MyPfp_1 = __importDefault(require("./view/user/MyPfp"));
const Offerd_1 = __importDefault(require("./view/user/Offerd"));
const OnBid_1 = __importDefault(require("./view/user/OnBid"));
const OnSale_1 = __importDefault(require("./view/user/OnSale"));
(async () => {
    skydapp_browser_1.msg.language = skydapp_browser_1.BrowserInfo.language;
    skydapp_browser_1.msg.parseCSV((await superagent_1.default.get("/msg.csv")).text);
    skydapp_common_1.SkyRouter.route("**", Layout_1.default);
    skydapp_common_1.SkyRouter.route("", Home_1.default);
    skydapp_common_1.SkyRouter.route("user/my-arts", MyArts_1.default);
    skydapp_common_1.SkyRouter.route("user/my-pfps", MyPfp_1.default);
    skydapp_common_1.SkyRouter.route("user/on-sale", OnSale_1.default);
    skydapp_common_1.SkyRouter.route("user/on-bid", OnBid_1.default);
    skydapp_common_1.SkyRouter.route("user/offerd", Offerd_1.default);
    skydapp_common_1.SkyRouter.route("pfp", Pfp_1.default);
    skydapp_common_1.SkyRouter.route("pfp/ranking", PfpRanking_1.default);
    skydapp_common_1.SkyRouter.route("pfp/add-by-owner", AddByPfpOwner_1.default);
    skydapp_common_1.SkyRouter.route("pfp/add-by-minter", AddByPfpMinter_1.default);
    skydapp_common_1.SkyRouter.route("pfp/add-by-other", AddByPfpOther_1.default);
    skydapp_common_1.SkyRouter.route("pfp/{addr}/on-sale", PfpProject_1.default);
    skydapp_common_1.SkyRouter.route("pfp/{addr}/on-bid", PfpProject_1.default);
    skydapp_common_1.SkyRouter.route("pfp/{addr}/offerd", PfpProject_1.default);
    skydapp_common_1.SkyRouter.route("pfp/{addr}", PfpProject_1.default);
    skydapp_common_1.SkyRouter.route("pfp/{addr}/{id}", PfpDetail_1.default);
    skydapp_common_1.SkyRouter.route("arts", art_1.default);
    skydapp_common_1.SkyRouter.route("arts/on-sale", ArtOnSale_1.default);
    skydapp_common_1.SkyRouter.route("arts/on-bid", ArtOnBid_1.default);
    skydapp_common_1.SkyRouter.route("arts/offerd", ArtOfferd_1.default);
    skydapp_common_1.SkyRouter.route("arts/artists/add", AddArtists_1.default);
    skydapp_common_1.SkyRouter.route("arts/artists/update", UpdateArtist_1.default);
    skydapp_common_1.SkyRouter.route("arts/{addr}", ArtDetail_1.default);
    if (sessionStorage.__spa_path) {
        skydapp_common_1.SkyRouter.go(sessionStorage.__spa_path);
        sessionStorage.removeItem("__spa_path");
    }
    if (await Wallet_1.default.connected() !== true) {
        await Wallet_1.default.connect();
    }
})();
//# sourceMappingURL=main.js.map