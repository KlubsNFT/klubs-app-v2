import { View, ViewParams } from "skydapp-common";
export default class ArtDetail implements View {
    private imageDisplay;
    private titleDisplay;
    private dateDisplay;
    private priceDisplay;
    private artistDisplay;
    private ownerDisplay;
    private descriptionDisplay;
    private transactionDisplay;
    private container;
    constructor(params: ViewParams);
    private init;
    changeParams(params: ViewParams, uri: string): void;
    close(): void;
}
//# sourceMappingURL=ArtDetail.d.ts.map