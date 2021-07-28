import Image from "next/image";
import { default as menu } from "../public/Hamburger.svg";

const Header: React.FC = () => {
  return (
    <div className="bg-gray-50 h-2/5 relative overflow-hidden">
      <div className="flex justify-center pt-8 items-center">
        <div className="mr-12 hidden sm:block">About Us</div>
        <div className="hidden sm:block">Contact Us</div>
        <div className="absolute right-16 py-2 px-4 cursor-pointer z-20 block sm:hidden">
          <Image alt="path" src={menu} />
        </div>
        <div className="absolute right-16 py-2 px-4 bg-green-400 text-white z-20 rounded-md hidden sm:block">
          Sign Up!
        </div>
        <div className="absolute right-0 top-0 lg:w-96 md:w-64 sm:w-48 w-24 h-96">
          <Image alt="path" src="/Path.png" layout="fill" />
        </div>
      </div>
      <div className="mt-6 font-extrabold text-center text-6xl pb-32">
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
