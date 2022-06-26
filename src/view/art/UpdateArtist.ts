import { DomNode, el } from "skydapp-browser";
import { View, ViewParams } from "skydapp-common";
import Layout from "../Layout";

export default class UpdateArtists implements View {

    private fileInput: DomNode<HTMLInputElement>;
    private nameInput: DomNode<HTMLInputElement>;
    private twitterInput: DomNode<HTMLInputElement>;
    private webInput: DomNode<HTMLInputElement>;
    private emailInput: DomNode<HTMLInputElement>;
    private bioInput: DomNode<HTMLInputElement>;
    private royaltyInput: DomNode<HTMLInputElement>;

    private container: DomNode;

    constructor() {
        Layout.current.title = "Update Artists";
        Layout.current.content.append(this.container = el(".artists-update-view",
            el("section",
                el("header",
                    el("h2", "Info Update"),
                ),
                el("article",
                    el("hr"),
                    el("form",
                        el(".input-container",
                            el("label", "Icon Image"),
                            this.fileInput = el("input", { placeholder: "Click here and upload the image", type: "file" }),
                        ),
                        el(".input-container",
                            el("label", "Artist Name"),
                            this.nameInput = el("input", { placeholder: "Write name" }),
                        ),
                        el(".input-container",
                            el("label", "Twitter Link"),
                            this.twitterInput = el("input", { placeholder: "Write twitter" }),
                        ),
                        el(".input-container",
                            el("label", "Web site"),
                            this.webInput = el("input", { placeholder: "Write website" }),
                        ),
                        el(".input-container",
                            el("label", "Email"),
                            this.emailInput = el("input", { placeholder: "Write email" }),
                        ),
                        el(".input-container",
                            el("label", "Bio"),
                            this.bioInput = el("input", { placeholder: "Wrte here maximum 1,000 letters" }),
                        ),
                    ),
                    el("hr"),
                    el(".royalty-container",
                        el("form",
                            el("h6", "Update Resale Royalty"),
                            el(".content",
                                el("p", "Resale Royalty Commission (%)"),
                                el("p", "Resale Royalty can be set unto 10% with two decimal places."),
                            ),
                            el(".input-container",
                                el("label", "Set Royalty"),
                                this.royaltyInput = el("input", { placeholder: "Write Royalty" }),
                            ),
                        ),
                    ),
                    el("hr"),
                    el(".button-wrap",
                        el("a", "SAVE"),
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