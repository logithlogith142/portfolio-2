import "./App.css";
import img1 from "./images/icon1.png";

import img3 from "./images/profilepic.png";
import { useTypewriter, Cursor } from "react-simple-typewriter";
function App() {
  const [text] = useTypewriter({
    words: ["3D Designer", "IoT Developer", "MERN Developer"],
    loop: {},
    typeSpeed: 200,
    deleteSpeed: 180,
  });
  return (
    <div className="hero pt-5" id="home">
      <div className="head1 d-flex flex-column gap-4  ">
        <div>
          <h3 className="head position-relative z-1">
            Hi, I'am <span className="l">LOGITH V</span>
          </h3>
        </div>
        <div>
          <h1 className="text position-relative">
            <span className="role">I'am a</span>
            <br /> {text}
            <Cursor cursorStyle="|" />
          </h1>
        </div>

        <div className="px-4">
          <h5 className="content position-relative z-1">
            Bridging web and smart tech, I innovate as a{" "}
            <span className="hl">MERN stack</span> and{" "}
            <span className="hl">IoT developer!!!</span>
          </h5>
        </div>
      </div>
      <div className="black p-relative bottom-0 w-100 h-25">
        <div className="profile  p-absolute start-50 translate-middle-y ">
          <img src={img3} alt="" />
        </div>
      </div>
    </div>
  );
}

export default App;
