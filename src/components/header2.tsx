import React from "react";
import { CiSearch } from "react-icons/ci";
import { LuSettings2 } from "react-icons/lu";
import { IoIosHeart } from "react-icons/io";
import { IoIosNotifications } from "react-icons/io";
import { IoMdSettings } from "react-icons/io";
import Image from "next/image";

const Header2 = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between md:max-w-[1440px] px-8  items-center w-full bg-[#F6F7F9] border-[1px] py-6 md:py-10">
      <div className="mb-4 bg-white md:mb-0">
        <h2 className="text-[#3563E9] font-bold text-[24px] md:text-[32px]">
          MORENT
        </h2>
      </div>
      <div className="flex items-center w-full md:w-[60%] lg:w-[50%] border-[1px] rounded-[70px] px-4 py-2 mb-4 md:mb-0">
        <CiSearch className="text-[#596780] text-xl" />
        <input
          type="text"
          placeholder="Search something here"
          className="flex-grow text-[14px] md:text-[16px] text-[#596780] font-medium px-2 outline-none"
        />
        <LuSettings2 className="text-[#596780] text-xl" />
      </div>
      <div className="flex items-center gap-4 md:gap-6">
        <IoIosHeart
          size={28}
          className="text-[#596780] hover:text-red-500 transition-all"
        />
        <div className="relative">
          <IoIosNotifications
            size={28}
            className="text-[#596780] hover:text-blue-500 transition-all"
          />
          <span className="absolute top-[-4px] right-0 bg-[#FF4423] rounded-full w-[10px] h-[10px]"></span>
        </div>
        <IoMdSettings
          size={28}
          className="text-[#596780] hover:text-green-500 transition-all"
        />
        <Image
          src="/images/u1.png"
          alt="user"
          width={36}
          height={36}
          className="rounded-full"
        />
      </div>
    </div>
  );
};

export default Header2;