import Image from "next/image";
import React from "react";

const Header: React.FC = () => {
  return (
    <div className="bg-gray-50 h-2/5 pt-10 relative overflow-hidden">
      <div className="absolute right-0 top-0 lg:w-96 md:w-64 sm:w-48 w-24 h-96">
        <Image alt="path" src="/Path.png" layout="fill" />
      </div>
      <div className="mt-6 font-extrabold text-center text-6xl pb-16">
        <div className="text-green-400">Todo</div>
        <div>App</div>
      </div>
      <div className="absolute left-0 lg:w-96 md:w-64 sm:w-48 w-24 h-96">
        <Image alt="path" src="/Path.png" layout="fill" />
      </div>
    </div>
  );
};

export default Header;
