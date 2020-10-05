import React from "react";
import "./Bubbles.css";
import blueSMS from "../../images/blueSMS.png";
import greySMS from "../../images/greySMS.png";

const Bubbles = () => {
  return (
    <div>
      <ul className="bubbles">
        <li>
          <img src={blueSMS} alt="SMS" />
        </li>
        <li>
          <img src={greySMS} alt="SMS" />
        </li>
        <li>
          <img src={blueSMS} alt="SMS" />
        </li>
        <li>
          <img src={greySMS} alt="SMS" />
        </li>
        <li>
          <img src={blueSMS} alt="SMS" />
        </li>
        <li>
          <img src={greySMS} alt="SMS" />
        </li>
        <li>
          <img src={blueSMS} alt="SMS" />
        </li>
        <li>
          <img src={greySMS} alt="SMS" />
        </li>
        <li>
          <img src={blueSMS} alt="SMS" />
        </li>
        <li>
          <img src={greySMS} alt="SMS" />
        </li>
        <li>
          <img src={blueSMS} alt="SMS" />
        </li>
        <li>
          <img src={greySMS} alt="SMS" />
        </li>
      </ul>
    </div>
  );
};

export default Bubbles;
