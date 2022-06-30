import { BrowserInfo, msg } from "skydapp-browser";
import { SkyRouter } from "skydapp-common";
import superagent from "superagent";
import Wallet from "./klaytn/Wallet";
import AddArtists from "./view/art/AddArtists";
import Art from "./view/art/art";
import ArtDetail from "./view/art/ArtDetail";
import ArtOfferd from "./view/art/ArtOfferd";
import ArtOnBid from "./view/art/ArtOnBid";
import ArtOnSale from "./view/art/ArtOnSale";
import UpdateArtists from "./view/art/UpdateArtist";
import Home from "./view/Home";
import Layout from "./view/Layout";
import PfpAddByMinter from "./view/pfp/AddByPfpMinter";
import PfpAddByOther from "./view/pfp/AddByPfpOther";
import PfpAddByOwner from "./view/pfp/AddByPfpOwner";
import Pfp from "./view/pfp/Pfp";
import PfpProject from "./view/pfp/PfpProject";
import PfpRanking from "./view/pfp/PfpRanking";
import MyArts from "./view/user/MyArts";
import Offerd from "./view/user/Offerd";
import OnBid from "./view/user/OnBid";
import OnSale from "./view/user/OnSale";

(async () => {
    msg.language = BrowserInfo.language;
    msg.parseCSV((await superagent.get("/msg.csv")).text);

    SkyRouter.route("**", Layout);
    SkyRouter.route("", Home);

    SkyRouter.route("user/my-arts", MyArts);
    SkyRouter.route("user/on-sale", OnSale);
    SkyRouter.route("user/on-bid", OnBid);
    SkyRouter.route("user/offerd", Offerd);

    SkyRouter.route("pfp", Pfp);
    SkyRouter.route("pfp/ranking", PfpRanking);
    SkyRouter.route("pfp/add-by-owner", PfpAddByOwner);
    SkyRouter.route("pfp/add-by-minter", PfpAddByMinter);
    SkyRouter.route("pfp/add-by-other", PfpAddByOther);

    SkyRouter.route("pfp/{addr}", PfpProject);
    SkyRouter.route("pfp/{addr}/on-sale", PfpProject);
    SkyRouter.route("pfp/{addr}/on-bid", PfpProject);
    SkyRouter.route("pfp/{addr}/offerd", PfpProject);

    SkyRouter.route("arts", Art);
    SkyRouter.route("arts/{addr}", ArtDetail);
    SkyRouter.route("arts/on-sale", ArtOnSale);
    SkyRouter.route("arts/on-bid", ArtOnBid);
    SkyRouter.route("arts/offerd", ArtOfferd);
    SkyRouter.route("arts/artists/add", AddArtists);
    SkyRouter.route("arts/artists/update", UpdateArtists);

    if (sessionStorage.__spa_path) {
        SkyRouter.go(sessionStorage.__spa_path);
        sessionStorage.removeItem("__spa_path");
    }

    if (await Wallet.connected() !== true) {
        await Wallet.connect();
    }
})();
