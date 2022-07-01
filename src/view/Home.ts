import { DomNode, el } from "skydapp-browser";
import { View, ViewParams } from "skydapp-common";
import ImageItem from "../component/ImageItem";
import Layout from "./Layout";
import ArtData from "../data/art.json";
import PfpData from "../data/pfp.json";
import ProjectItem from "../component/ProjectItem";

export default class Home implements View {

    private bannerDisplay: DomNode;
    private bannerArtistDisplay: DomNode;
    private artDisplay: DomNode;
    private pfpDisplay: DomNode;

    private container: DomNode;

    constructor() {
        Layout.current.title = "Meet Connect Play with";
        Layout.current.content.append(this.container = el(".home-view",
            el("section",
                el("header",
                    el(".pc-container",
                        el(".banner-container",
                            this.bannerDisplay = el("img", { src: "https://api.klu.bs/thumbnail?url=https%3A%2F%2Fstorage.googleapis.com%2Fklubs%2Fpfpbanner%2Fda7222bf-788a-4f05-b6f7-0c93325447b1.png", alt: "" }),
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
        this.bannerDisplay.empty().append(
        );
        this.bannerArtistDisplay.empty().appendText("BY KlayRabbit");
    }

    private loadArtList(): void {
        ArtData.map((data) => {
            this.artDisplay.append(
                new ImageItem(`/arts/${data.address}`, data.image, data.title, data.artist, data.price),
            );
        });
    }

    private loadPfpList(): void {
        PfpData.map((data) => {
            this.pfpDisplay.append(
                new ProjectItem(`/pfp/${data.address}`, data.image, data.title, data.artist, data.description),
            );
        });
    }


    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        this.container.delete();
    }
}