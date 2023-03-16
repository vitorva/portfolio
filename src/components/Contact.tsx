import linkedin from "../assets/linkedin.svg";
import cv from "../assets/cv.svg";
import github from "../assets/github.svg";
import mail from "../assets/mail.svg";
import profile from "../assets/profile.png";

interface ContactProps {
  contactRef: React.RefObject<HTMLDivElement>;
}

function Contact({ contactRef }: ContactProps) {
  return (
    <div
      ref={contactRef}
      style={{ scrollMarginTop: "10vh" }}
      className="contact"
    >
      <img alt="profile" className="profile" src={profile} width="200" />

      <div>
        <a target="_blank" href="CV_VitorVazAfonso.pdf">
          <img alt="CV" className="logo" src={cv} width="30" height="30" />
        </a>

        <a
          target="_blank"
          href="https://www.linkedin.com/in/vitor-vaz-afonso-6770241b4"
        >
          <img
            alt="Linkedin"
            className="logo"
            src={linkedin}
            width="30"
            height="30"
          />
        </a>

        <a href="mailto: vitor.vazafonso@gmail.com">
          <img alt="Mail" className="logo" src={mail} width="30" height="30" />
        </a>

        <a target="_blank" href="https://github.com/vitorva">
          <img
            alt="Github"
            className="logo"
            src={github}
            width="30"
            height="30"
          />
          https://github.com/vitorva
        </a>
      </div>
    </div>
  );
}

export default Contact;
