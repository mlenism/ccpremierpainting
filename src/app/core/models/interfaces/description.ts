import { LinkContent } from "./link-content";

export interface Description {
    paragraph: string;
    links?: LinkContent[];
    textAfterLinks?: string;
    list?: string[];
}
