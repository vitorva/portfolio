import github from "../assets/github.svg";
import gitlab from "../assets/gitlab.svg";
import links from "../assets/links.svg";
import vscode from "../assets/vscode.svg";

import React, { useRef } from "react";

interface ProjectsProps {
  projectsRef: React.RefObject<HTMLDivElement>;
}

function Projects({ projectsRef }: ProjectsProps) {
  return (
    <div
      ref={projectsRef}
      style={{ scrollMarginTop: "10vh" }}
      className="projects"
    >
      <h1>Projects</h1>

      <div className="myFlex">
        <div className="project">
          <h2>UON VSCode</h2>
          <p>
            An extension that provides support for the UON serialization
            language in VSCode.
          </p>

          <p>
            This extension was made during my Bachelor's project. The project
            received a rating of <b>5.4 / 6.</b>
          </p>

          <p className="technos">
            <a>VS Code · API · ANTLR · Typescript · Mocha · CI / CD</a>
          </p>

          <a
            target="_blank"
            href="https://github.com/vitorva/vscode-uon"
            className="link"
          >
            <div className="btn">
              <img
                alt="Vue logo"
                className="logo-project"
                src={gitlab}
                width="20"
                height="20"
              />
              <span>View repository</span>
            </div>
          </a>

          <a
            target="_blank"
            href="https://marketplace.visualstudio.com/items?itemName=vitorva.vscode-uon"
            className="link"
          >
            <div className="btn">
              <img
                alt="Vue logo"
                className="logo-project"
                src={vscode}
                width="20"
                height="20"
              />
              <span>View Marketplace</span>
            </div>
          </a>
        </div>

        <div className="project">
          <h2>Journeys</h2>
          <p>
            An web application made for trip creation using points of interest
            around Switzerland.{" "}
          </p>

          <p>
            This project was developed in a team of 5 students as a semester
            project (PDG) at HEIG-VD. It received a rating of <b>5.6 / 6</b>.
          </p>

          <p className="technos">
            <a>
              MapLibre · React · Material UI ·Spring Boot · Maven · Neo4j · GCP
              · CI / CD
            </a>
          </p>

          <a
            target="_blank"
            href="https://gitlab.com/pdg-journeys/journeys"
            className="link"
          >
            <div className="btn">
              <img
                alt="Vue logo"
                className="logo-project"
                src={gitlab}
                width="20"
                height="20"
              />
              <span>View repository</span>
            </div>
          </a>

          <a target="_blank" href="http://www.myjourneys.xyz" className="link">
            <div className="btn">
              <img
                alt="Vue logo"
                className="logo-project"
                src={links}
                width="20"
                height="20"
              />
              <span>View Website</span>
            </div>
          </a>
        </div>

        <div className="project">
          <h2>EasyToolz</h2>
          <p>
            An web application for sharing unused objects troughout switzerland.
          </p>

          <p>
            This project was developed in a team of 6 students as a semester
            project (PRO) at HEIG-VD. It received a rating of <b>5.5 / 6.</b>
          </p>

          <p className="technos">
            <a>React · Bootstrap · Javascript ·Spring Boot · Java</a>
          </p>

          <a
            target="_blank"
            href="https://github.com/vitorva/EasyToolz"
            className="link"
          >
            <div className="btn">
              <img
                alt="Vue logo"
                className="logo-project"
                src={github}
                width="20"
                height="20"
              />
              <span>View repository</span>
            </div>
          </a>
        </div>

        <div className="project">
          <h2>Songify</h2>
          <p>A Spotify-like web app using the SoundCloud API.</p>

          <p className="technos">
            <a>Vue3 · Vuex · Express · SoundCloud API · Docker</a>
          </p>

          <a
            target="_blank"
            href="https://github.com/vitorva/songify"
            className="link"
          >
            <div className="btn">
              <img
                alt="Vue logo"
                className="logo-project"
                src={github}
                width="20"
                height="20"
              />
              <span>View repository</span>
            </div>
          </a>

          <a target="_blank" href="http://46.101.222.19:8888" className="link">
            <div className="btn">
              <img
                alt="Vue logo"
                className="logo-project"
                src={links}
                width="20"
                height="20"
              />
              <span>View Website</span>
            </div>
          </a>
        </div>

        <div className="info">
          <a
            className="info2"
            target="_blank"
            href="https://www.linkedin.com/in/vitor-vaz-afonso-6770241b4"
          >
            More project on my github
            <img alt="github" src={github} width="30" height="30" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
