import Image from "next/image";
import React from "react";
import { default as menu } from "../public/Hamburger.svg";
import { default as cross } from "../public/Cross.svg";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Link from "next/link";

const Header: React.FC = () => {
  const [openMenu, setOpenMenu] = React.useState<boolean>(false);
  return (
    <div className="bg-gray-50 h-2/5 relative overflow-hidden">
      <div className="flex justify-center pt-8 items-center text-gray-500">
        <Link href="/About">
          <div className="mr-12 hidden sm:block cursor-pointer">About Us</div>
        </Link>
        <Link href="/About">
          <div className="hidden sm:block cursor-pointer">Contact Us</div>
        </Link>
        <div
          className="absolute right-16 py-2 px-4 cursor-pointer z-20 block sm:hidden"
          onClick={() => setOpenMenu(!openMenu)}
        >
          <Image alt="path" src={menu} />
        </div>
        <Link href="/About">
          <div className="absolute right-16 py-2 px-4 bg-green-400 text-white z-20 rounded-md hidden sm:block cursor-pointer">
            Sign Up!
          </div>
        </Link>

        <div className="absolute right-0 top-0 lg:w-96 md:w-64 sm:w-48 w-24 h-96">
          <Image alt="path" src="/Path.png" layout="fill" />
        </div>
      </div>
      <div className="mt-6 font-extrabold text-center text-6xl pb-16">
        <div className="text-green-400">Todo</div>
        <div>App</div>
      </div>
      <div className="absolute left-0 lg:w-96 md:w-64 sm:w-48 w-24 h-96">
        <Image alt="path" src="/Path.png" layout="fill" />
      </div>
      <Modal
        className="flex justify-center"
        open={openMenu}
        onClose={() => setOpenMenu(!openMenu)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openMenu}>
          <div className="bg-white w-full mx-2 mt-8 h-1/5 rounded-lg border-transparent shadow-sm relative outline-none">
            <div
              className="float-right p-8 cursor-pointer"
              onClick={() => setOpenMenu(!openMenu)}
            >
              <Image src={cross} />
            </div>
            <Link href="/About">
              <div className="text-gray-500 p-8 pb-4 mt-8 cursor-pointer">
                About us
              </div>
            </Link>
            <Link href="/About">
              <div className="pl-8 text-gray-500 cursor-pointer">
                Contact us
              </div>
            </Link>
            <Link href="/About">
              <div className="bg-green-400 text-center w-full absolute bottom-0 rounded-b-lg py-2 cursor-pointer">
                Sign up
              </div>
            </Link>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default Header;
