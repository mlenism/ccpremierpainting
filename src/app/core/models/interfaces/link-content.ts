export interface LinkContent {
    name: string;
    url: string;
    sublinks?: LinkContent[];
}