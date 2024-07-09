import { ImageInfo } from "./image-info";
import { LinkContent } from "./link-content";
import { ModalInfo } from "./modal-info";

interface RequiredLinkContent extends LinkContent {
    sublinks: LinkContent[];
}

export interface NavContent {
    image: ImageInfo;
    imageLink: string;
    links: RequiredLinkContent[];
    modalInfo: ModalInfo;
}