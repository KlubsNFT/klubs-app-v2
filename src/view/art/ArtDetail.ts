import { DomNode, el } from "skydapp-browser";
import { View, ViewParams } from "skydapp-common";
import Layout from "../Layout";
import ArtData from "../../data/art.json";

export default class ArtDetail implements View {

    private imageDisplay: DomNode<HTMLImageElement>;
    private titleDisplay: DomNode;
    private dateDisplay: DomNode;
    private priceDisplay: DomNode;
    private artistDisplay: DomNode;
    private ownerDisplay: DomNode;
    private descriptionDisplay: DomNode;
    private transactionDisplay: DomNode;

    private container: DomNode;

    constructor() {
        Layout.current.title = "Art Detail";
        Layout.current.content.append(this.container = el(".art-detail-view",
            el("section",
                el("header",
                    el("hr"),
                    el(".img-container",
                        this.imageDisplay = el("img", { src: ArtData[4].image, alt: "test" }),
                    ),
                    el("hr"),
                ),
                el("article",
                    el(".title-container",
                        this.titleDisplay = el("h2", "title"),
                        el(".info-container",
                            el(".content",
                                this.dateDisplay = el("span", "Minterd on Apr 6, 2022"),
                                this.priceDisplay = el("p", "Price : 300"),
                            ),
                            el("a", "Collect"),
                        ),
                    ),
                    el(".caption-container",
                        el(".artist-container",
                            el("h6", "Artist"),
                            this.artistDisplay = el("p", "Artist"),
                        ),
                        el(".owner-container",
                            el("h6", "Owner"),
                            this.ownerDisplay = el("p", "Owner"),
                        ),
                    ),
                    el(".content",
                        el(".description-container",
                            el("h6", "Description"),
                            this.descriptionDisplay = el("p", "Description"),
                        ),
                        el(".history-container",
                            el("h6", "Transaction History"),
                            this.transactionDisplay = el("p", "0x33333222ddddd ->  0x33333222ddddd 2022.06.22 111 by 0x8eedx"),
                        ),
                    ),
                ),
            ),
        ));
        this.init();
    }

    private init(): void {
        this.imageDisplay.empty().append(
        );
        this.titleDisplay.empty().appendText(ArtData[4].title);
        // this.dateDisplay.empty().append();
        this.priceDisplay.empty().appendText(ArtData[4].price);
        this.artistDisplay.empty().appendText(ArtData[4].artist);
        // this.ownerDisplay.empty().append();
        // this.descriptionDisplay.empty().append();
        // this.transactionDisplay.empty().append();
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        this.container.delete();
    }
}