import "./contact.css";
import { FaPhoneAlt, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export default function Contact() {
  return (
    <div
      className="contact bg-black pt-4 d-flex flex-column gap-5 justify-content-center align-items-center pb-4"
      id="contact"
    >
      <div className="d-flex justify-content-center ">
        <h1>Get In Touch</h1>
      </div>
      <div className="col-10 d-flex justify-content-center align-items-center flex-column gap-4 ">
        <div className="col-12 col-lg-10 col-md-10 text-center">
          <p data-aos="fade-up">
            Let’s bring your ideas to life! Whether you’re starting fresh,
            running a business, or have a vision you want to see grow, I’m here
            to help. From planning to making it real, let’s work together to
            create something amazing
          </p>
        </div>
        <div className="d-flex gap-3" data-aos="fade-down">
          <FaPhoneAlt size={25} className="icon" />

          <h5>91+ 8148696887</h5>
        </div>
        <div className="d-flex gap-3" data-aos="fade-up">
          <SiGmail size={25} className="icon" />

          <h5>logithlogith142@gmail.com</h5>
        </div>
        <div className="d-flex gap-3" data-aos="fade-down">
          <FaGithub size={25} className="icon" />

          <h5>
            <a
              href="https://github.com/logithlogith142/My-profile/blob/main/README.md"
              id="git"
            >
              Github
            </a>
          </h5>
        </div>
      </div>
    </div>
  );
}
