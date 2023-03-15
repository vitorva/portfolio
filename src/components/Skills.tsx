interface SkillsProps {
    skillsRef: React.RefObject<HTMLDivElement>;
}

function Skills({skillsRef} : SkillsProps) {
    return (<div ref = {skillsRef} style={{ scrollMarginTop: '10vh' }} className="skills">Skills</div>)
}

export default Skills;