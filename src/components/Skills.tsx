interface SkillsProps {
  skillsRef: React.RefObject<HTMLDivElement>;
}

function Skills({ skillsRef }: SkillsProps) {
  return (
    <div ref={skillsRef} style={{ scrollMarginTop: "10vh" }} className="skills">
      <h1>Skills</h1>
    </div>
  );
}

export default Skills;
