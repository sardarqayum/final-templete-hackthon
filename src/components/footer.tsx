import React from "react";

const Footer = () => {
  return (
    <div className="bg-white md:max-w-[1440px]  w-full">
      {/* Main Footer Section */}
      <div className="md:mx-auto mx-0 md:max-w-[1016px] px-4 md:px-12 py-8 space-y-8 flex flex-col md:flex-row justify-between">
        {/* Logo and Vision */}
        <div className="w-full md:w-1/2 space-y-4">
          <h2 className="text-[32px] font-bold text-[#3563E9]">MORENT</h2>
          <p className="text-[16px] w-[292px] font-medium text-gray-600">
            Our vision is to provide convenience and help increase your sales
            business.
          </p>
        </div>

              {/* Navigation Links */}
              <div className="w-full md:w-1/2 space-y-4 md:pl-14 pl-0">
        <div className="w-full md:w-[70%] flex flex-wrap justify-between   gap-5">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-[20px] font-semibold text-gray-900">About</h3>
            <ul className="space-y-2 text-[16px] font-medium text-gray-600">
              <li>How it works</li>
              <li>Featured</li>
              <li>Partnership</li>
              <li>Business Relation</li>
            </ul>
          </div>

          {/* Community Section */}
          <div className="space-y-4">
            <h3 className="text-[20px] font-semibold text-gray-900">Community</h3>
            <ul className="space-y-2 text-[16px] font-medium text-gray-600">
              <li>Events</li>
              <li>Blog</li>
              <li>Podcast</li>
              <li>Invite a friend</li>
            </ul>
          </div>

          {/* Socials Section */}
          <div className="space-y-4">
            <h3 className="text-[20px] font-semibold text-gray-900">Socials</h3>
            <ul className="space-y-2 text-[16px] font-medium text-gray-600">
              <li>Discord</li>
              <li>Instagram</li>
              <li>Twitter</li>
              <li>Facebook</li>
            </ul>
          </div>
        </div>
      </div>
</div>
      {/* Divider */}
      <div className="bg-gray-300 h-px md:mx-auto mx-0 max-w-[1320px]"></div>

      {/* Bottom Footer Section */}
      <div className="max-w-[1320px] mx-auto px-6 md:px-12 py-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-[16px] font-medium text-gray-600 text-center md:text-left">
          ©2022 MORENT. All rights reserved
        </p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <p className="text-[16px] font-medium text-gray-600">Privacy & Policy</p>
          <p className="text-[16px] font-medium text-gray-600">Terms & Conditions</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;