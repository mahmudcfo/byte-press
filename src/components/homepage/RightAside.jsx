import React from "react";
import SocialLogin from "./SocialLogin";
import SocialOption from "./SocialOption";
import QZone from "./QZone";

const RightAside = () => {
  return (
    <div className="space-y-8">
      <SocialLogin />
      <SocialOption />
      <QZone />
    </div>
  );
};

export default RightAside;
