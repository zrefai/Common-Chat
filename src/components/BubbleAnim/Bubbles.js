import React from "react";
import "./Bubbles.css";
import blueSMS from "../../images/blueSMS.png";
import purpleSMS from "../../images/purpleSMS.png";

const Bubbles = () => {
  const randomNumber = (a, b) => {
    return Math.floor(Math.random() * (b - a + 1)) + a;
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
            const dim = randomNumber(50, 95) + "px";
            const loc = parseFloat(randomNumber(0, 85)).toFixed(2) + "%";
            const delay = randomNumber(0, 20) + "s";
            const dur = randomNumber(7, 20) + "s";
            const randIM = randomNumber(0, 2) ? blueSMS : purpleSMS;
            return (
              <li key={i} style={styles(dim, loc, delay, dur)}>
                <img src={randIM} alt="SMS" />
              </li>
            );
          })}
      </ul>
    );
  };

  return <div>{generateSMSBubbles(25)}</div>;
};

export default Bubbles;
