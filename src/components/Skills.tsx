interface SkillsProps {
  skillsRef: React.RefObject<HTMLDivElement>;
}

function Skills({ skillsRef }: SkillsProps) {
  return (
    <div ref={skillsRef} style={{ scrollMarginTop: "10vh" }} className="skills">
      <h1>Skills</h1>
      <div className="mySkills">
        <div className="skill">
          <h3>Technical knowledges</h3>

          <p>A selection of technolgie I mainly use.</p>

          <p>
            <b>Languages :</b> JavaScript • TypeScript • Java • C++ • C# •
            Python • Scala • HTML5 • CSS3 • PHP • Kotlin
          </p>
          <p>
            <b>Frontend : </b> React • Redux • Vue.js • Vuex
          </p>
          <p>
            <b>Backend : </b> Node.js • Express.js • Spring Boot • Maven •
            GraphQL
          </p>
          <p>
            <b>Databases : </b> MySQL • PostgreSQL • MongoDB • Neo4j
          </p>
          <p>
            <b>Cloud : </b> AWS • GCP • Heroku • DigitalOcean
          </p>
          <p>
            <b>Testing : </b> Jest • Enzyme • CodeceptJS • Puppeteer • Jmeter
          </p>
          <p>
            <b>DevOps : </b> Git • Docker • CI/CD • Pipelines
          </p>
        </div>
        <div className="skill">
          <h3>General knowledges</h3>
          <p>
            {" "}
            I acquired skills in many other technology-related fields.
            Specifically, I have focused on machine learning, natural language
            processing, mobile application development, cloud infrastructure and
            Devops. Furthermore, I also learned AGILE methods and how to work in
            collaboration through many group projects.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Skills;
