import React, { useRef } from 'react';

interface ProjectsProps {
    projectsRef: React.RefObject<HTMLDivElement>;
}

function Projects({ projectsRef }: ProjectsProps) {
    return (<div ref={projectsRef} style={{ scrollMarginTop: '10vh' }} className="projects">Projects</div>)
}

export default Projects;
