import { HeaderInfo } from "./header-info";
import { Description } from "./description";
import { ImageInfo } from "./image-info";

export interface Fragment {
    header: HeaderInfo;
    descriptions: Description[];
    image: ImageInfo;
}
