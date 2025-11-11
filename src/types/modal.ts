import type { AboutContent } from "./profile";
import type { Project } from "./projects";

export type ModalContent = {
    about: AboutContent;
    projects: Project[];
};