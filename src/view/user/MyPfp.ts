import { DomNode, el } from "skydapp-browser";
import { View, ViewParams } from "skydapp-common";
import ImageItem from "../../component/ImageItem";
import Layout from "../Layout";
import ViewUtil from "../ViewUtil";
import RabbitData from "../../data/klayrabbit.json";
import CommonUtil from "../../CommonUtil";
import Wallet from "../../klaytn/Wallet";

export default class MyPfps implements View {

    private idDisplay: DomNode;
    private subIdDisplay: DomNode;
    private artDisplay: DomNode;

    private container: DomNode;

    constructor() {
        Layout.current.title = "MyPfps";
        Layout.current.content.append(this.container = el(".my-arts-view",
            el("section",
                el("header",
                    this.idDisplay = el("h2", "Idname"),
                    this.subIdDisplay = el("h3", "BY IDNAME"),
                    el(".tab-container",
                        el("a", "My Art List", { click: () => { ViewUtil.go("/user/my-arts") } }),
                        el("a.active", "My Pfp List", { click: () => { ViewUtil.go("/user/my-pfps") } }),
                        // el("a", "On sale", { click: () => { ViewUtil.go("/user/on-sale") } }),
                        // el("a", "On Bid", { click: () => { ViewUtil.go("/user/on-bid") } }),
                        // el("a", "On Offerd", { click: () => { ViewUtil.go("/user/offerd") } }),
                    ),
                    el("hr"),
                ),
                this.artDisplay = el("article",
                ),
            ),
        ));
        this.init();
    }

    private init(): void {
        this.loadId();
        this.loadArts();
    }

    private async loadId(): Promise<void> {
        const address = await Wallet.loadAddress();
        this.idDisplay.empty().appendText(CommonUtil.shortenAddress(address!));
        this.subIdDisplay.empty().appendText(`${address}`);
    }

    private loadArts(): void {
        RabbitData.map((data) => {
            this.artDisplay.append(
                new ImageItem(`/pfp/${data.address}/${data.id}`, data.image, data.title, data.artist, data.price),
            );
        });
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        this.container.delete();
    }
}