import ProjectCard from '@/components/ProjectCard';
import type { Project } from '@/types/projects';

type ProjectSectionProps = {
    projects: Project[];
};

const ProjectsSection = ({ projects }: ProjectSectionProps) => (
    <section id="projects">
        <div className="container">
            <div className="row">
                <h1 className="section__title">
                    Here are some of my <span className="blue">projects</span>.
                </h1>
                <ul className="project__list">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </ul>
            </div>
        </div>
    </section>
);

export default ProjectsSection;