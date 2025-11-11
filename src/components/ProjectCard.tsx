import type { Project } from "../types/projects";

type ProjectCardProps = {
    project: Project;
};

const ProjectCard = ({ project }: ProjectCardProps) => (
    <li className="project">
        <div className="project__wrapper">
            <img className="project__img" src={project.image} alt={project.title} loading="lazy" />
            <div className="project__wrapper--bg" />
            <div className="project__description">
                <h3 className="project__description--title">{project.title}</h3>
                <h4 className="project__description--sub-title">{project.stack}</h4>
                <p className="project__description--para">{project.description}</p>
                <div className="project__description--links">
                    <a className="project__description--link" href={project.repo} target="_blank" rel="noreferrer">
                        <i className="fa-brands fa-square-github" aria-hidden="true" />
                    </a>
                    {project.live && (
                        <a className="project__description--link" href={project.live} target="_blank" rel="noreferrer">
                            <i className="fas fa-link" aria-hidden="true" />
                            <span className="sr-only">Live site</span>
                        </a>
                    )}
                </div>
            </div>
        </div>
    </li>
);

export default ProjectCard