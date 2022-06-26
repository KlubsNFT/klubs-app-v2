import { DomNode, el } from "skydapp-browser";
import { View, ViewParams } from "skydapp-common";
import Layout from "../Layout";

export default class PfpRanking implements View {

    private container: DomNode;

    constructor() {
        Layout.current.title = "PFP Ranking";
        Layout.current.content.append(this.container = el(".pfp-ranking-view",
            el("section",
                el("header",
                    el("h2", "Top NFTs"),
                    el("h3", "Last 24hours"),
                ),
                el("table",
                    el("thead",
                        el("tr",
                            el("td", "All NFTs"),
                            el("td", "Collection"),
                            el("td", "Total Volume"),
                            el("td", "Floor Price"),
                            el("td", "Owners"),
                            el("td", "Items"),
                        ),
                    ),
                    el("hr"),
                    el("tbody",
                        el("tr",
                            el("td.id", "1"),
                            el("td",
                                el("img", { src: "title", alt: "title" }),
                                el("h6", "title"),
                            ),
                            el("td", "850"),
                            el("td", "ETH 0.04"),
                            el("td", "10.0K"),
                            el("td", "10.0K"),
                        ),
                    ),
                ),
            ),
        ));
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        this.container.delete();
    }
}