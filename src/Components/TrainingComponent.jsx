import React from "react";
import "./TrainingComponentStyles.css";

import { Link } from "react-router-dom";

import Pod from "../assets/images/pod.jpg";
import Moon from "../assets/images/moon.jpg";

const TrainingComponent = () => {
  return (
    <div className="training">
      <div className="left">
            <h1>Training</h1>
            <p>
            Traveling to astronaut altitude will be an adventure unlike any other.
            Customers for suborbital flights who want to get the most out of their
            flight experience should begin preparing now, by enrolling in an
            approved civilian space flight training program. The training will be
            real, the excitement unmatched, and the result a safer, more
            enjoyable, incredible space adventure.
            </p>
            <Link to='/contact'><button className="btn">Contact</button></Link>
      </div>
      <div className="right">
          <div className="img-container">
              <div className="image-stack top">
                  <img src={Moon} className='img' alt="" />
              </div>
              <div className="image-stack bottom">
                  <img src={Pod} className='img' alt="" />
              </div>
          </div>
      </div>
    </div>
  );
};

export default TrainingComponent;
