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
      <p className="about">
        In my free time, I enjoy pursuing a variety of hobbies that allow me to
        relax and discover new things. I like to hike and enjoy spending time in
        nature. One of my new hobbies is to take photos of landscapes and scenes
        that I encounter along the way.
      </p>

      <CarouselComponent />
    </div>
  );
}

export default AboutMe;
