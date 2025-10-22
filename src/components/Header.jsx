import React from "react";
import logo from "../assets/images/logo.png";
import { format } from "date-fns";

const Header = () => {
  return (
    <div className="flex justify-center flex-col items-center gap-3">
      <img className="w-[450px]" src={logo} alt="BYTE PRESS" />
      <p className="text-accent">Journalism Without Fear or Favour</p>
      <p className="font-semibold ">
        <span>{format(new Date(), "EEEE, ")}</span>
        <span className=" text-accent">
          {format(new Date(), " MMMM dd, yyyy")}
        </span>
      </p>
    </div>
  );
};

export default Header;
