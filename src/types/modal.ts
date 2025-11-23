import type { AboutContent } from "@/types/profile";
import type { Project } from "@/types/projects";

export type ModalContent = {
    about: AboutContent;
    projects: Project[];
};