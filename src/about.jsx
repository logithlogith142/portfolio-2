import "./about.css";
import { GiAchievement } from "react-icons/gi";
import { MdMonitor, MdOutlineCastForEducation } from "react-icons/md";
import { PiCertificateLight } from "react-icons/pi";

export default function About() {
  return (
    <div className="about pb-2 pt-3" id="about">
      <div className="text text-center">
        <h1>
          <span>About</span> Me
        </h1>
      </div>
      <div className="row d-flex justify-content-center gap-3 mt-5 ">
        <div
          className="col-10 col-md-6 col-lg-5  divider d-flex gap-3 align-items-start pt-3"
          data-aos="flip-left"
        >
          <div className="icon pt-4">
            <MdOutlineCastForEducation
              size={90}
              style={{ color: " #311653" }}
            />
          </div>
          <div>
            <h2>Education</h2>

            <h6>B.Sc. Electronics And Communication Systems</h6>
            <p>KG College of Arts and Science</p>
          </div>
        </div>
        <div
          className="col-10 col-md-6 col-lg-5 divider d-flex gap-3 align-items-start pt-3"
          data-aos="flip-right"
        >
          <div className="icon pt-4">
            <MdMonitor size={90} style={{ color: " #311653" }} />
          </div>
          <div>
            <h2>Skills</h2>
            <ul className="d-flex  flex-column">
              <li>
                <p>MERN Stack</p>
              </li>
              <li>
                <p>3D design</p>
              </li>
              <li>
                <p>Internet of Things</p>
              </li>
            </ul>
          </div>
        </div>
        <div
          className="col-10 col-md-6 col-lg-5 divider d-flex gap-3 align-items-start pt-3"
          data-aos="flip-left"
        >
          <div className="icon pt-4">
            <PiCertificateLight size={90} style={{ color: " #311653" }} />
          </div>
          <div>
            <h2>Certificates</h2>
            <ul>
              <li>
                <p>
                  I successfully completed a full-stack development internship
                  during my college studies
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div
          className="col-10 col-md-6 col-lg-5 divider d-flex gap-3 align-items-start pt-3"
          data-aos="flip-right"
        >
          <div className="icon pt-4">
            <GiAchievement size={90} style={{ color: " #311653" }} />
          </div>
          <div>
            <h2>Achievements</h2>
            <ul>
              <li>
                <p>I was the district-level winner of DeepRacer in 2023 </p>
              </li>
              <li>
                <p>
                  My design has been officially published in the Indian Design
                  Search database{" "}
                  <a href="https://search.ipindia.gov.in/DesignSearch/DESIGNSEARCH/Searchtility?page=20">
                    Click to visit
                  </a>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
