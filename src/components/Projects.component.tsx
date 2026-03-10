import React from "react";
import ProjectCard from "./ProjectCard.component";
import content from "../assets/content.json";
const Projects = () => {
    return (
        <section id='three'>
            <header className='major'>
                <h2>Projects</h2>
            </header>
            <div className='row justify-content-between project-container'>
                {content.projects.map((project) => (
                    <ProjectCard
                        key={project.title}
                        title={project.title}
                        github={project.github}
                        deployed={project.deployed}
                        image={project.image}
                        description={project.description}
                    />
                ))}
            </div>
        </section>
    );
};

export default Projects;
