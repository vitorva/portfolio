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
      <div className="left">
        <img alt="profile" className="profile" src={profile} width="200" />
      </div>

      <div className="right">
        <h3 className="item">Vitor Vaz Afonso</h3>

        <p className="item">Software engineer</p>

        <div className="item">
          <img alt="Mail" className="logo" src={mail} width="30" height="30" />
          <a href="mailto: vitor.vazafonso@gmail.com">
            vitor.vazafonso@gmail.com
          </a>
        </div>

        <div className="item">
          <img
            alt="Linkedin"
            className="logo"
            src={linkedin}
            width="30"
            height="30"
          />
          <a
            target="_blank"
            href="https://www.linkedin.com/in/vitor-vaz-afonso-6770241b4"
          >
            My Linkedin
          </a>
        </div>

        <div className="item">
          <img alt="CV" className="logo" src={cv} width="30" height="30" />
          <a target="_blank" href="CV_VitorVazAfonso.pdf">
            My resume
          </a>
        </div>

        <div className="item">
          <a target="_blank" href="https://github.com/vitorva">
            <img
              alt="Github"
              className="logo"
              src={github}
              width="30"
              height="30"
            />
            vitorva
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
