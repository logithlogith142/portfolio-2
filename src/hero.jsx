import weather from "./images/weather.png";
import "./hero.css";
import filter from "./images/filter.png";
import bmi from "./images/bmi.png";
import color from "./images/color.jpg";
import crud from "./images/crud.jpg";
import courasel from "./images/carousel.jpg";

export default function Hero() {
  const obj = [
    {
      title: "Weather forecast",
      content:
        "Developed a responsive weather forecasting application that provides real-time updates and predictions using API integration",
      img: weather,
      link: "https://github.com/logithlogith142/weather-app.git",
    },
    {
      title: "Courasel",
      content:
        "Created an interactive image carousel using HTML, CSS, and JavaScript, featuring smooth transitions, navigation controls, and responsive design",
      img: courasel,
      link: "https://github.com/logithlogith142/courasel-using-react-.git",
    },
    {
      title: "Bmi Calculator",
      content:
        "Developed a BMI Calculator using ReactJS, enabling users to input height and weight to calculate their Body Mass Index with real-time updates",
      img: bmi,
      link: "https://github.com/logithlogith142/BMI-calci.git",
    },
    {
      title: "Crud Application",
      content:
        "Developed a CRUD application using ReactJS and APIs, allowing users to create, read, update, and delete data dynamically with real-time server integration",
      img: crud,
      link: "https://github.com/logithlogith142/crud-using-JSON-Api.git",
    },
    {
      title: "Background color picker",
      content:
        "Created a background color picker application using JavaScript, enabling users to select and apply custom colors dynamically to the UI",
      img: color,
      link: "https://github.com/logithlogith142/background.git",
    },
    {
      title: "Filter",
      content:
        "Developed a product filter application using ReactJS, enabling users to sort and filter products dynamically based on categories, price, and other criteria",
      img: filter,
      link: "https://github.com/logithlogith142/filter.git",
    },
  ];
  return (
    <div
      className="projects pt-4 d-flex justify-content-center align-items-center flex-column pb-5 "
      id="projects"
    >
      <div>
        <h1>Projects</h1>
      </div>

      <div id="carouselExampleRide" className="carousel slide carousel-fade">
        <div className="carousel-inner">
          {obj.map((o, i) => (
            <div
              key={i}
              className={`carousel-item ${
                i === 1 ? "active" : ""
              } d-flex align-items-center justify-content-center mt-5`}
            >
              <div className="con row col-8 ms-2  d-flex justify-content-lg-evenly align-items-sm-center gap-lg-5 ">
                <img
                  src={o.img}
                  className="img-fluid col-lg-6 col-sm-4 col-md-4"
                  alt="Project Icon"
                />
                <div className=" col-lg-4 col-sm-8 col-md-4 pt-3 pb-3">
                  <h3>{o.title}</h3>
                  <p>{o.content}</p>
                  <button className="bt">
                    <a href={o.link}>Click</a>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          className="carousel-control-prev btnc"
          type="button"
          data-bs-target="#carouselExampleRide"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next btnc "
          type="button"
          data-bs-target="#carouselExampleRide"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
