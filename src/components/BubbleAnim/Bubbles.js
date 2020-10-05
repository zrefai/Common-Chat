import React from "react";
import "./Bubbles.css";
import blueSMS from "../../images/blueSMS.png";
import greySMS from "../../images/greySMS.png";

const Bubbles = () => {
  const randomNumber = (a, b) => {
    return Math.floor(Math.random() * b) + a;
  };

  const generateSMSBubbles = (size) => {
    const styles = (dim, loc, delay, dur) => ({
      width: dim,
      height: dim,
      left: loc,
      WebkitAnimationDelay: delay,
      animationDelay: delay,
      WebkitAnimationDuration: dur,
      animationDuration: dur,
    });

    return (
      <ul className="bubbles">
        {Array(size)
          .fill()
          .map((_, i) => {
            const dim = randomNumber(20, 85) + "px";
            const loc = parseFloat(randomNumber(0, 100)).toFixed(2) + "%";
            const delay = randomNumber(0, 10) + "s";
            const dur = randomNumber(0, 10) + "s";
            const randIM = randomNumber(0, 2) ? blueSMS : greySMS;
            return (
              <li key={i} style={styles(dim, loc, delay, dur)}>
                <img src={randIM} alt="SMS" />
              </li>
            );
          })}
      </ul>
    );
  };

  return (
    <div>
      {" "}
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
      </ul>{" "}
    </div>
  );
};

export default Bubbles;
