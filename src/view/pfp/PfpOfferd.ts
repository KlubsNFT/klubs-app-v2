import { DomNode, el } from "skydapp-browser";
import { View, ViewParams } from "skydapp-common";
import ImageItem from "../../component/ImageItem";
import Select from "../../component/shared/Select";
import Layout from "../Layout";
import ViewUtil from "../ViewUtil";

export default class PfpOnOffered implements View {

    private nameDisplay: DomNode;
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
                            el("h3", "BY IDNAME"),
                        ),
                        el(".img-container",
                            el("img", { src: "", alt: "Project name" }),
                        ),
                    ),
                    el(".tab-container",
                        el("a", "All NFTs", { click: () => { ViewUtil.go("/pfp") } }),
                        el("a", "On sale", { click: () => { ViewUtil.go("/pfp/on-sale") } }),
                        el("a", "On Bid", { click: () => { ViewUtil.go("/pfp/on-bid") } }),
                        el("a.active", "On Offerd", { click: () => { ViewUtil.go("/pfp/offerd") } }),
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
        this.nameDisplay.empty().appendText("ProjectName");
        this.pfpDisplay.empty().append(new ImageItem("", "", "title", "@artist ID", "0.0"));
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        this.container.delete();
    }
}