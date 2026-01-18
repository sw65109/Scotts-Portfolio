export type Project = {
    id: number;
    title: string;
    stack: string;
    description: string;
    repo: string;
    live?: string;
    demos?: {label: string; url: string}[];
    image: string;
};