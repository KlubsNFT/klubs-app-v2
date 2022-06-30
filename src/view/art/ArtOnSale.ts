import { DomNode, el } from "skydapp-browser";
import { View, ViewParams } from "skydapp-common";
import ImageItem from "../../component/ImageItem";
import Layout from "../Layout";
import ViewUtil from "../ViewUtil";

export default class ArtOnSale implements View {

    private artDisplay: DomNode;

    private container: DomNode;

    constructor() {
        Layout.current.title = "Art";
        Layout.current.content.append(this.container = el(".art-view",
            el("section",
                el("header",
                    el("h2", "Crypto Art"),
                    el(".tab-container",
                        el("a", "All NFTs", { click: () => { ViewUtil.go("/arts") } }),
                        el("a.active", "On sale", { click: () => { ViewUtil.go("/arts/on-sale") } }),
                        el("a", "On Bid", { click: () => { ViewUtil.go("/arts/on-bid") } }),
                        el("a", "On Offerd", { click: () => { ViewUtil.go("/arts/offerd") } }),
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
        this.loadProject();
    }

    private loadProject(): void {
        this.artDisplay.empty().append(new ImageItem("", "", "title", "@artist ID", "0"));
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        this.container.delete();
    }
}