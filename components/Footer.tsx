import React from "react";

const Footer: React.FC = () => {
  return (
    <div className="text-center text-gray-400 pt-24 bg-gray-800 pb-10">
      <p>BUILT WITH THE FOLLOWING TECHNOLOGIES</p>
      <div className="flex flex-wrap items-center justify-around mt-10 text-6xl">
        <a href="https://reactjs.org/" target="_blank">
          <i className="devicon-react-original-wordmark"></i>
        </a>
        <a href="https://nextjs.org/" target="_blank">
          <i className="devicon-nextjs-original-wordmark"></i>
        </a>
        <a href="https://www.typescriptlang.org/" target="_blank">
          <i className="devicon-typescript-plain"></i>
        </a>
        <a href="https://tailwindcss.com/" target="_blank">
          <i className="devicon-tailwindcss-plain"></i>
        </a>
        <a href="https://firebase.google.com/" target="_blank">
          <i className="devicon-firebase-plain-wordmark"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
