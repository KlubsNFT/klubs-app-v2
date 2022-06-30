import { DomNode, el } from "skydapp-browser";
import { View, ViewParams } from "skydapp-common";
import ProjectItem from "../../component/ProjectItem";
import Layout from "../Layout";
import PfpData from "../../data/pfp.json";

export default class Pfp implements View {

    private pfpDisplay: DomNode;

    private container: DomNode;

    constructor() {
        Layout.current.title = "PFP";
        Layout.current.content.append(this.container = el(".pfp-view",
            el("section",
                el("header",
                    el(".title-cotnainer",
                        el("h2", "PFP"),
                    ),
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
        PfpData.map((data) => {
            this.pfpDisplay.append(
                new ProjectItem("/pfp/1", data.image, data.title, data.artist, data.description),
            );
        });
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        this.container.delete();
    }
}