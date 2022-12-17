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
            el(".kollections",
                el("h1", "KLUBS 👉 Kollections로 리브랜딩 및 기술 이전"),
                el("p", `안녕하세요 KLUBS 디렉터 심영재입니다.
KLUBS는 DSC의 MIX 토큰을 사용한 NFT 거래소를 시작으로,
이후에는 다양한 프로젝트를 지원하기 위해 노력해왔습니다.

시장이 성숙함에 따라 많은 거래소가 출시되었고, 새로운 거래소들이 더 나은 UX와 사용자풀을 갖추게 됐습니다.
이러한 훌륭한 경쟁자들의 출현과, MIX 토큰의 가격 하락, NFT 시장 악화가 겹쳐, 현재 KLUBS 거래소의 경우 거래가 거의 이루어지지 않고 있습니다.

이제 KLUBS는 거래 기능을 종료하고 다양한 프로젝트를 지원하는 생태계에 기여하는 역할만을 남기고자, 브랜드를 교체하게 됐습니다.
거래 기능 종료일: 12월 19일

앞으로 KLUBS는 Kollections라는 이름으로 재탄생하게 되며,
국내의 다양한 NFT 콜렉션들을 서포트하는 비영리 프로젝트로 변경됩니다.

기존의 거래소 관련 코드와 기술은 DSC Label에 모두 이전합니다.
DSC Label에서는 MIX 토큰의 가치 재고에 많은 노력을 기울이고 있으며, 이후 MIX를 활용한 새로운 거래 시스템 또한 갖추게 될 예정입니다.

그동안 많은 관심과 사랑을 주셔서 감사드리며, 앞으로도 시장에 긍정적인 영향을 드릴 수 있도록 노력하겠습니다.

편안한 연말 보내시기 바랍니다.
감사합니다.

디렉터 심영재 드림`),
            ),
            el("section",
                el("header",
                    el(".pc-container",
                        el(".banner-container",
                            this.bannerDisplay = el("img", { src: "https://api.klu.bs/thumbnail?url=https%3A%2F%2Fstorage.googleapis.com%2Fklubs%2Fpfpbanner%2Fda7222bf-788a-4f05-b6f7-0c93325447b1.png", alt: "banner" }),
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
                            this.bannerArtistDisplay = el("p", "BY IDNAME"),
                        ),
                        el(".banner-container",
                            this.bannerDisplay = el("img", { src: "https://api.klu.bs/thumbnail?url=https%3A%2F%2Fstorage.googleapis.com%2Fklubs%2Fpfpbanner%2Fda7222bf-788a-4f05-b6f7-0c93325447b1.png", alt: "banner" }),
                        ),
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
            this.bannerDisplay = el("img", { src: "https://api.klu.bs/thumbnail?url=https%3A%2F%2Fstorage.googleapis.com%2Fklubs%2Fpfpbanner%2Fda7222bf-788a-4f05-b6f7-0c93325447b1.png", alt: "banner" }),
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