import React, { useRef } from 'react';

interface AboutMeProps {
    aboutMeRef: React.RefObject<HTMLDivElement>;
}


function AboutMe({aboutMeRef} : AboutMeProps) {
    return (<div ref ={aboutMeRef} style={{ scrollMarginTop: '10vh' }} className="aboutMe">AboutME</div>)
}

export default AboutMe;