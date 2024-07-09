import { ModalItem } from "./modal-item";

export interface ModalInfo {
    buttonTitle: string;
    buttonIcon: string;
    title: string;
    items: ModalItem[];
}