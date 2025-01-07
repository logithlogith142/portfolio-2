import "./skills.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaGitSquare,
  FaJs,
  FaReact,
  FaNodeJs,
  FaFigma,
  FaBootstrap,
} from "react-icons/fa";
import { SiMongodb, SiArduino, SiBlender } from "react-icons/si";
import { DiRasberryPi } from "react-icons/di";

export default function Skills() {
  return (
    <div
      className="skills pt-2 pb-3 d-flex flex-column align-items-center justify-content-center"
      id="skills"
    >
      <div className="d-flex justify-content-center col-10">
        <h1>What I Know</h1>
      </div>
      <div className="row pt-5 col-10  gap-3 justify-content-center ">
        <div
          className="skill rounded-4 g-col-3 col-5 col-md-4 col-lg-2 d-flex flex-column align-items-center border p-3"
          data-aos="zoom-in"
        >
          <FaHtml5 size={60} style={{ color: "#98b4ce" }} />
          <h6>HTML</h6>
        </div>
        <div
          className="skill rounded-4 g-col-3 col-5 col-md-4 col-lg-2 d-flex flex-column align-items-center border p-3"
          data-aos="zoom-in"
        >
          <FaCss3Alt size={60} style={{ color: "#98b4ce" }} />
          <h6>CSS</h6>
        </div>
        <div
          className="skill rounded-4 g-col-3 col-5 col-md-4 col-lg-2 d-flex flex-column align-items-center border p-3"
          data-aos="zoom-in"
        >
          <FaJs size={60} style={{ color: "#98b4ce" }} />
          <h6>Javascript</h6>
        </div>
        <div
          className="skill rounded-4 g-col-3 col-5 col-md-4 col-lg-2 d-flex flex-column align-items-center border p-3"
          data-aos="zoom-in"
        >
          <FaBootstrap size={60} style={{ color: "#98b4ce" }} />
          <h6>Bootstrap</h6>
        </div>
        <div
          className="skill rounded-4 g-col-3 col-5 col-md-4 col-lg-2 d-flex flex-column align-items-center border p-3"
          data-aos="zoom-in"
        >
          <FaReact size={60} style={{ color: "#98b4ce" }} />
          <h6>React JS</h6>
        </div>
        <div
          className="skill rounded-4 g-col-3 col-5 col-md-4 col-lg-2 d-flex flex-column align-items-center border p-3"
          data-aos="zoom-in"
        >
          <FaNodeJs size={60} style={{ color: "#98b4ce" }} />
          <h6>Node JS</h6>
        </div>
        <div
          className="skill rounded-4 g-col-3 col-5 col-md-4 col-lg-2 d-flex flex-column align-items-center border p-3"
          data-aos="zoom-in"
        >
          <SiMongodb size={60} style={{ color: "#98b4ce" }} />
          <h6>Mongodb</h6>
        </div>
        <div
          className="skill rounded-4 g-col-3 col-5 col-md-4 col-lg-2 d-flex flex-column align-items-center border p-3"
          data-aos="zoom-in"
        >
          <SiArduino size={60} style={{ color: "#98b4ce" }} />
          <h6>Arduino</h6>
        </div>
        <div className="d-flex justify-content-center col-10">
          <h3 style={{ color: "#98b4ce" }}>Tools</h3>
        </div>
        <div
          className="skill rounded-4 g-col-3 col-5 col-md-4 col-lg-2 d-flex flex-column align-items-center border p-3"
          data-aos="zoom-in"
        >
          <DiRasberryPi size={60} style={{ color: "#98b4ce" }} />
          <h6>RasberryPi</h6>
        </div>
        <div
          className="skill rounded-4 g-col-3 col-5 col-md-4 col-lg-2 d-flex flex-column align-items-center border p-3"
          data-aos="zoom-in"
        >
          <FaGitSquare size={60} style={{ color: "#98b4ce" }} />
          <h6>Git</h6>
        </div>
        <div
          className="skill rounded-4 g-col-3 col-5 col-md-4 col-lg-2 d-flex flex-column align-items-center border p-3"
          data-aos="zoom-in"
        >
          <SiBlender size={60} style={{ color: "#98b4ce" }} />
          <h6>Blender</h6>
        </div>
        <div
          className="skill rounded-4 g-col-3 col-5 col-md-4 col-lg-2 d-flex flex-column align-items-center border p-3 "
          data-aos="zoom-in"
        >
          <FaFigma size={60} style={{ color: "#98b4ce" }} />
          <h6>Figma</h6>
        </div>
      </div>
    </div>
  );
}
