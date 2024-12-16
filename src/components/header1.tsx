import React from 'react';
import Image from 'next/image';

const Header1 = () => {
  return (
    <div className="max-w-[1440px] w-full border-2 mb-6 flex flex-col md:flex-row justify-between items-center px-4 md:px-8 lg:px-16 py-4 md:py-6">
      {/* Left Section */}
      <div className="flex items-center gap-3 md:w-2/3 w-full text-center md:text-left">
        <Image
          src="/images/logo.png"
          alt="logo"
          width={32}
          height={32}
          className="w-8 h-8"
        />
        <h2 className="text-gray-800 text-lg md:text-2xl lg:text-3xl font-bold leading-tight">
          High Fidelity Dashboard - Home Rent
        </h2>
      </div>

      {/* Right Section */}
      <div className="mt-4 md:mt-0 md:w-1/3 w-full text-center md:text-right">
        <p className="text-sm md:text-base lg:text-lg text-gray-600 font-medium">
          Last Updated:{" "}
          <span className="font-bold text-black">
            8 Aug 2022
          </span>
        </p>
      </div>
    </div>
  );
};

export default Header1;