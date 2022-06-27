import { DomNode, el } from "skydapp-browser";
import { View, ViewParams } from "skydapp-common";
import ImageItem from "../component/ImageItem";
import ConnectWalletPopup from "../component/shared/ConnectWalletPopup";
import Layout from "./Layout";

export default class Home implements View {

    private bannerDisplay: DomNode;
    private bannerArtistDisplay: DomNode;
    private artDisplay: DomNode;
    private pfpDisplay: DomNode;

    private container: DomNode;

    constructor() {
        Layout.current.title = "Meet Connect Play with";
        Layout.current.content.append(this.container = el(".home-view",
            new ConnectWalletPopup(() => { }),
            el("section",
                el("header",
                    el(".pc-container",
                        el(".banner-container",
                            this.bannerDisplay = el("img", { src: "", alt: "" }),
                        ),
                        el(".title-container",
                            el("h3", "Meet"),
                            el("h3", "Connect"),
                            el(".container",
                                el("h3", "Play"),
                                el("p", "with"),
                            ),
                            el("h2", "KLUBS"),
                            this.bannerArtistDisplay = el("p", "BY IDNAME"),
                        ),
                    ),
                    el(".mobile-container",
                        el(".top-container",
                            el("h3", "Meet Connect Play"),
                            el("p", "BY IDNAME"),
                        ),
                        el(".banner-container"),
                        el(".bottom-container",
                            el("h3", "with"),
                            el("h2", "KLUBS"),
                        ),
                    ),
                ),
                el("article",
                    el(".art-container",
                        el("h6", "ART"),
                        this.artDisplay = el(".list-container",
                        ),
                    ),
                    el(".pfp-container",
                        el("h6", "PFP"),
                        this.pfpDisplay = el(".list-container",
                        ),
                    ),
                ),
            ),
        ));
        this.init();
    }

    private init(): void {
        this.loadBanner();
        this.loadArtList();
        this.loadPfpList();
    }

    private loadBanner(): void {
        this.bannerDisplay.empty().append();
        this.bannerArtistDisplay.empty().appendText("BY IDNAME");
    }

    private loadArtList(): void {
        this.artDisplay.empty().append(
            new ImageItem("/arts/1", "", "title", "@artist ID", "0.0"),
        );
    }

    private loadPfpList(): void {
        this.pfpDisplay.empty().append(
            new ImageItem("/pfp/1", "", "title", "@artist ID", "0.0"),
        );
    }


    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        this.container.delete();
    }
}