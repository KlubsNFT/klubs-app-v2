import { DomNode, el } from "skydapp-browser";
import ViewUtil from "../view/ViewUtil";

export default class ProjectItem extends DomNode {

    constructor(link: string, image: string, title: string, artist: string, description: string) {
        super(".project-item");
        this.append(
            el("a", { click: () => { ViewUtil.go(`${link}`) } },
                el(".img-container",
                    el("img", { src: image, alt: title }),
                ),
                el("h6", title),
                el(".caption-container",
                    el("p", artist),
                ),
                el("p", description),
            ),
        );
    }
}