import React from "react";

const Footer: React.FC = () => {
  return (
    <div className="text-center text-gray-400 pt-24 bg-gray-800 pb-10">
      <p>BUILT WITH THE FOLLOWING TECHNOLOGIES</p>
      <div className="flex flex-wrap items-center justify-around mt-10 text-6xl">
        <i className="devicon-react-original-wordmark"></i>
        <i className="devicon-nextjs-original-wordmark"></i>
        <i className="devicon-typescript-plain"></i>
        <i className="devicon-tailwindcss-plain"></i>
        <i className="devicon-firebase-plain-wordmark"></i>
      </div>
    </div>
  );
};

export default Footer;
