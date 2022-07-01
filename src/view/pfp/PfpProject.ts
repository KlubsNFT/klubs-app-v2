import { DomNode, el } from "skydapp-browser";
import { View, ViewParams } from "skydapp-common";
import ImageItem from "../../component/ImageItem";
import Select from "../../component/shared/Select";
import Layout from "../Layout";
import ViewUtil from "../ViewUtil";
import RabbitData from "../../data/klayrabbit.json";

export default class PfpProject implements View {

    private nameDisplay: DomNode;
    private idDisplay: DomNode;
    private pfpDisplay: DomNode;

    private container: DomNode;

    constructor() {
        Layout.current.title = "PFP";
        Layout.current.content.append(this.container = el(".pfp-project-view",
            el("section",
                el("header",
                    el(".title-cotnainer",
                        el(".content",
                            this.nameDisplay = el("h2", "Project name"),
                            this.idDisplay = el("h3", "BY IDNAME"),
                        ),
                        el(".img-container",
                            el("img", { src: "https://lh3.googleusercontent.com/0cdWDR5LsRf5xqwobQfI-i2oqA1XlaxqLIUpRBwLrinqeNt540wGEVSjDXFA5011R4av7WMq85KGH3wzBSPIYvI0xIw4XchZPu5W=s0", alt: "" }),
                        ),
                    ),
                    el(".tab-container",
                        el("a.active", "All NFTs", { click: () => { ViewUtil.go("/pfp") } }),
                        el("a", "On sale", { click: () => { ViewUtil.go("/pfp/on-sale") } }),
                        el("a", "On Bid", { click: () => { ViewUtil.go("/pfp/on-bid") } }),
                        el("a", "On Offerd", { click: () => { ViewUtil.go("/pfp/offerd") } }),
                    ),
                    el("hr"),
                    el(".property-container",
                        el(".title",
                            el("h5", "Propertise"),
                        ),
                        el(".content",
                            new Select(),
                        ),
                    ),
                    el("hr"),
                ),
                this.pfpDisplay = el("article",
                ),
            ),
        ));
        this.init();
    }

    private init(): void {
        this.loadProject();
    }

    private loadProject(): void {
        this.nameDisplay.empty().appendText("KlayRabbit");
        this.idDisplay.empty().appendText("KlayRabbit");
        RabbitData.map((data) => {
            this.pfpDisplay.append(
                new ImageItem(`/pfp/${data.address}/${data.id}`, data.image, data.title, data.artist, data.price),
            );
        });
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        this.container.delete();
    }
}