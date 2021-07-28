import Image from "next/image";

const Header: React.FC = () => {
  return (
    <div className="bg-gray-50 h-2/5 relative overflow-hidden">
      <div className="flex justify-center pt-8 items-center">
        <div className="mr-12">About Us</div>
        <div>Contact Us</div>
        <div className="absolute right-16 py-2 px-4 bg-green-400 text-white z-20 rounded-md">
          Sign Up!
        </div>
        <div className="absolute right-0 top-0">
          <Image alt="path" src="/Path.png" height="400" width="400" />
        </div>
      </div>
      <div className="mt-24 font-extrabold text-center text-6xl">
        <div className=" text-green-400">Todo</div>
        <div>App</div>
      </div>
      <div className="absolute left-0">
        <Image alt="path" src="/Path.png" height="400" width="400" />
      </div>
    </div>
  );
};

export default Header;
