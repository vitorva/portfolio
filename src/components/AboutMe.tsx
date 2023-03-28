import React, { useRef } from "react";
import CarouselComponent from "./Carousel";

interface AboutMeProps {
  aboutMeRef: React.RefObject<HTMLDivElement>;
}

function AboutMe({ aboutMeRef }: AboutMeProps) {
  return (
    <div
      ref={aboutMeRef}
      style={{ scrollMarginTop: "10vh" }}
      className="aboutMe"
    >
      <h1>About me</h1>
      <div className="about">
        <p>
          {" "}
          My name is Vitor Vaz Afonso. I'm a Software Engineer from Switzerland.
        </p>
        <p>
          {" "}
          I gratuated from the{" "}
          <a href="https://heig-vd.ch/">
            University of Applied Sciences (HEIG-VD) in Yverdon-les-Bains
          </a>{" "}
          in Semptember 2022, with a Bachelor of Science HES-SO in Computer
          Science, major in Software Engineering
        </p>
        <p>
          {" "}
          In my free time, I enjoy pursuing a variety of hobbies that allow me
          to relax and discover new things. I particularly like to hike and
          enjoy spending time in nature.
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
