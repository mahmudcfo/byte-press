import React from "react";
import swimmingImage from "../../assets/images/swimming.png";
import playgroundImage from "../../assets/images/playground.png";
import classImage from "../../assets/images/class.png";
import adImage from "../../assets/images/bg.png";

const QZone = () => {
  return (
    <>
      <div className="bg-base-200 p-3">
        <h2 className="font-bold mb-5">Q-Zone</h2>
        <div className="space-y-5 ">
          <img src={swimmingImage} alt="Swimming" />
          <img src={classImage} alt="Class" />
          <img src={playgroundImage} alt="Playground" />
        </div>
      </div>
      <img className="w-full" src={adImage} alt="Ad" />
    </>
  );
};

export default QZone;
