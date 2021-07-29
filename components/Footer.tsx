import React from "react";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <div className="text-center text-gray-400 mt-48">
      <p>TRUSTED BY OVER 26,000 FORWARD-THINKING COMPANIES</p>
      <div className="flex flex-wrap items-center justify-around mt-10">
        <div className="mx-10">
          <Image alt="path" src="/Tuple.png" width="100" height="40" />
        </div>
        <div className="mx-10">
          <Image alt="path" src="/Mirage.png" width="150" height="40" />
        </div>
        <div className="mx-10">
          <Image alt="path" src="/StaticKit.png" width="125" height="30" />
        </div>
        <div className="mx-10">
          <Image alt="path" src="/Transistor.png" width="150" height="40" />
        </div>
        <div className="mx-10">
          <Image alt="path" src="/Workcation.png" width="180" height="30" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
