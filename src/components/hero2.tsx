import React from "react";
import Image from "next/image";


const Hero2 = () => {
  return (
    <div className="md:max-w-[1440px] bg-gray-100 mx-auto flex flex-col h-auto">
      <div className="w-full flex flex-col md:flex-row gap-12 px-6 md:px-16 py-4 h-auto">
        <div className="bg-[url('/images/h1.png')] bg-cover bg-center w-full md:w-[640px] px-4 py-4 h-[360px] mt-8 mx-auto rounded-[10px]">
          <h2 className="font-[600] text-[32px] w-[284px] h-[96px] mt-3 text-white">
            The Best Platform for Car Rental
          </h2>
          <p className="font-[500] text-[16px] w-[284px] h-[48px] mt-3 text-white">
            Ease of doing a car rental safely and reliably. Of course at a low price.
          </p>
          <button className="p-2 text-white border-[1px] mt-3 rounded-md w-[120px] h-[44px]">
            Rental Car
          </button>
          <Image
            src="/images/c2.png"
            alt="car2"
            width={406}
            height={116}
            className="mt-3"
          />
        </div>
        <div className="bg-[url('/images/h2.png')] bg-cover bg-center w-full md:w-[640px] px-4 py-4 h-[360px] mt-8 mx-auto rounded-[10px]">
          <h2 className="font-[600] text-[32px] w-[284px] h-[96px] mt-3 text-white">
            Easy way to rent a car at a low price
          </h2>
          <p className="font-[500] text-[16px] w-[284px] h-[48px] mt-3 text-white">
            Providing cheap car rental services and safe and comfortable facilities.
          </p>
          <button className="p-2 text-white border-[1px] mt-3 rounded-md w-[120px] h-[44px]">
            Rental Car
          </button>
          <Image
            src="/images/c1.png"
            alt="car1"
            width={340}
            height={108}
            className="mt-3"
          />
        </div>
      </div>      
    </div>
  );
};

export default Hero2;