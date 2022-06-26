import { DomNode, el } from "skydapp-browser";

export default class ProjectItem extends DomNode {

    constructor(image: string, title: string, artist: string, description: string) {
        super(".project-item");
        this.append(
            el(".img-container",
                el("img", { src: image, alt: title }),
            ),
            el("h6", title),
            el(".caption-container",
                el("p", artist),
            ),
            el("p", description),
        );
    }
}