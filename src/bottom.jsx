import React, { useState } from "react";
import "./bottom.css";
import { FaHome, FaPhoneAlt } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { GrProjects } from "react-icons/gr";
import { MdDashboardCustomize } from "react-icons/md";

export default function Bottom() {
  return (
    <bottom className="container bg dark d-flex flex-row justify-content-center fixed-bottom">
      <div className="inner d-flex flex-row justify-content-center bg-transparent bg-gradient rounded-5 px-4 py-2 ">
        <section>
          <a href="#home">
            <button className="rounded-5 px-2 d-flex justify-content-center py-2 btn1  ">
              <FaHome className="text-primary" />
            </button>
          </a>
        </section>
        <section>
          {" "}
          <a href="#about">
            <button className="rounded-5 px-2 d-flex justify-content-center py-2 btn1">
              {" "}
              <CgProfile className="text-primary" />
            </button>
          </a>
        </section>
        <section>
          {" "}
          <a href="#projects">
            <button className="rounded-5 px-2 d-flex justify-content-center py-2 btn1">
              {" "}
              <MdDashboardCustomize className="text-primary" />
            </button>
          </a>
        </section>

        <section>
          {" "}
          <a href="#skills">
            <button className="rounded-5 px-2 d-flex justify-content-center py-2 btn1 ">
              <GrProjects className="text-primary" />
            </button>
          </a>
        </section>
        <section>
          {" "}
          <a href="#contact">
            <button className="rounded-5 px-2 d-flex justify-content-center py-2 btn1 ">
              {" "}
              <FaPhoneAlt className="text-primary" />
            </button>
          </a>
        </section>
      </div>
    </bottom>
  );
}
