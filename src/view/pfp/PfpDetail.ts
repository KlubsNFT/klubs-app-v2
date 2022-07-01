import { DomNode, el } from "skydapp-browser";
import { View, ViewParams } from "skydapp-common";
import Layout from "../Layout";
import RabbitData from "../../data/klayrabbit.json";

export default class PfpDetail implements View {

    private imageDisplay: DomNode<HTMLImageElement>;
    private titleDisplay: DomNode;
    private dateDisplay: DomNode;
    private priceDisplay: DomNode;
    private artistDisplay: DomNode;
    private ownerDisplay: DomNode;
    private descriptionDisplay: DomNode;
    private transactionDisplay: DomNode;

    private container: DomNode;

    constructor(params: ViewParams) {
        const id = parseInt(params.id!, 10);
        const data = RabbitData.filter(data => data.id === id.toString());

        Layout.current.title = "Pfp Detail";
        Layout.current.content.append(this.container = el(".art-detail-view",
            el("section",
                el("header",
                    el("hr"),
                    el(".img-container",
                        this.imageDisplay = el("img", { src: data[0].image, alt: "test" }),
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
        this.init(data);
    }

    private init(data: any): void {
        this.titleDisplay.empty().appendText(data[0].title);
        // this.dateDisplay.empty().append();
        this.priceDisplay.empty().appendText(data[0].price);
        this.artistDisplay.empty().appendText(data[0].artist);
        // this.ownerDisplay.empty().append();
        // this.descriptionDisplay.empty().append();
        // this.transactionDisplay.empty().append();
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        this.container.delete();
    }
}