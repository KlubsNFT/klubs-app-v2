import { DomNode, el } from "skydapp-browser";
import { View, ViewParams } from "skydapp-common";
import Layout from "../Layout";

export default class AddArtists implements View {

    private addressInput: DomNode<HTMLInputElement>;

    private container: DomNode;

    constructor() {
        Layout.current.title = "Add Artists";
        Layout.current.content.append(this.container = el(".artists-add-view",
            el("section",
                el("header",
                    el("h2", "Your KLUBS Artist"),
                    el("h3", "Registration"),
                ),
                el("article",
                    el("h6", "Contract Address"),
                    this.addressInput = el("input", { placeholder: "Input Address" }),
                    el(".button-wrap",
                        el("a", "SIGN\nUP"),
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