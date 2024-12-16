import * as React from 'react';
import Image from 'next/image';
import { FaRegStar } from "react-icons/fa6";
import Link from 'next/link';
import { FaStar } from "react-icons/fa6";

const recomendedCar = [
  {id:1,
    name: "All New Rush",
    type: "SUV",
    image: "/images/c5.png",
    specs: {
      gasoline: "70L",
      steering: "Manual",
      capacity: "6 people",
    },
    price: {
      current: 80,
      original:72 
    },
    isFavorite: false,
  },
  {id:2,
    name: "CR  - V",
    type: "SUV",
    image: "/images/c6.png",
    specs: {
      gasoline: "80L",
      steering: "Manual",
      capacity: "6 people",
    },
    price: {
      current: 80,
    },
    isFavorite: true,
  },
  {id:3,
    name: "All New Terios",
    type: "SUV",
    image: "/images/c7.png",
    specs: {
      gasoline: "90L",
      steering: "Manual",
      capacity: "6 people",
    },
    price: {
      current: 74,
    },
    isFavorite: false,
  },
  {id:4,
    name: "CR  - V",
    type: "SUV",
    image: "/images/c6.png",
    specs: {
      gasoline: "80L",
      steering: "Manual",
      capacity: "6 people",
    },
    price: {
      current: 80,
    },
    isFavorite: true,
  },

  {id:5,
    name: "MG ZX Exclusice",
    type: "Hatchback",
    image: "/images/c7.png",
    specs: {
      gasoline: "70L",
      steering: "Manual",
      capacity: "4 people",
    },
    price: {
      current: 76,
      original: 80
    },
    isFavorite: true,
  },
  {id:6,
    name: "New MG ZS",
    type: "SUV",
    image: "/images/c8.png",
    specs: {
      gasoline: "80L",
      steering: "Manual",
      capacity: "6 people",
    },
    price: {
      current: 80, 
    },
    isFavorite: false,
  },

]


const UpperSide = () => {
  return (
    <>
      <div className="md:max-w-[1200px] max-w-full bg-gray-100 mx-auto mb-8 px-4 py-8 gap-4">
        <div className="md:max-w-[1016px] max-w-full mb-8 bg-gray px-4 py-8 flex flex-col flex-wrap md:flex-row  gap-4">
          {/* Left Side */}
          <div className="md:w-[492px] w-full h-auto space-y-8 rounded-[10px]">
            <div className="bg-[url('/images/h1.png')] bg-cover bg-center md:w-[492px] w-full px-4 py-4 h-[360px] rounded-[10px]">
              <h2 className="font-[600] text-[32px] md:w-[284px] w-full text-white">
                The Best Platform for Car Rental
              </h2>
              <p className="font-[500] text-[16px] md:w-[284px] w-full mt-3 text-white">
                Ease of doing a car rental safely and reliably. Of course at a
                low price.
              </p>
              <Link href="/contact">
              <button className="p-2 text-white border-[1px] mt-3 rounded-md w-[120px] h-[44px]">
                Rental Car
              </button>
              </Link>
              <Image
                src="/images/c2.png"
                alt="car2"
                width={406}
                height={116}
                className="mt-3 w-full md:w-auto"
              />
            </div>
            <div className="mt-4 md:w-[492px] w-full flex gap-4 flex-col md:flex-row">
              <Image
                src="/images/cd1.png"
                alt="car"
                width={148}
                height={124}
                className="rounded-lg md:w-[178px] w-full md:h-[124px] h-[300px]"
              />
              <Image
                src="/images/cd2.png"
                alt="car"
                width={148}
                height={124}
                className="rounded-lg md:w-[178px] w-full md:h-[124px] h-[300px]"
              />
              <Image
                src="/images/cd3.png"
                alt="car"
                width={148}
                height={124}
                className="rounded-lg md:w-[178px] w-full md:h-[124px] h-[300px]"
              />
            </div>
          </div>

          {/* Right Side */}
          <div className="md:w-[450px] w-full h-auto bg-white space-y-8 rounded-[10px] p-4">
            <div className="w-full flex justify-between items-center">
              <div>
                <h2 className="text-[32px] font-bold">Nissan GT - R</h2>
                <span className="flex gap-1 items-center">
                  <FaStar size={20} className="text-[#FBAD39]" />
                  <FaStar size={20} className="text-[#FBAD39]" />
                  <FaStar size={20} className="text-[#FBAD39]" />
                  <FaStar size={20} className="text-[#FBAD39]" />
                  <FaRegStar size={20} />
                  <p className="text-[14px] font-[500] text-[#596780] ml-4">
                    440+ Reviewer
                  </p>
                </span>
              </div>
              <Image src="/images/red.png" alt="fav" width={24} height={24} />
            </div>
            <p className="text-[#596780] font-[400] text-[20px]">
              NISMO has become the embodiment of Nissan&#39;s outstanding
              performance, inspired by the most unforgiving proving ground, the
              &#34;race track&#34;.
            </p>
            <ul className="flex flex-wrap gap-4">
              <li className="text-[#596780] text-[20px] font-[400]">Type Car</li>
              <li className="text-[#131313] font-[400] text-[20px]">Sport</li>
              <li className="text-[#596780] text-[20px] font-[400]">
                Capacity
              </li>
              <li className="text-[#131313] font-[400] text-[20px]">
                2 Person
              </li>
            </ul>
            <ul className="flex flex-wrap gap-4">
              <li className="text-[#596780] text-[20px] font-[400]">Steering</li>
              <li className="text-[#131313] font-[400] text-[20px]">Manual</li>
              <li className="text-[#596780] text-[20px] font-[400]">
                Gasoline
              </li>
              <li className="text-[#131313] font-[400] text-[20px]">70L</li>
            </ul>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-xl font-bold text-slate-900">
                  $80.00
                  <span className="text-sm text-slate-400">/ day</span>
                </p>
                <p className="text-sm text-slate-400 line-through">$100.00</p>
              </div>
              <button className="p-2 bg-[#3563E9] text-[16px] w-[140px] h-[56px] text-white rounded-md">
                Rent Now
              </button>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="bg-white p-4 space-y-8">
          <h2 className="text-[#131313] font-[600] text-[20px]">
            Reviews <span className="bg-[#3563E9] text-white p-1 rounded-md">13</span>
          </h2>
          <div className=" space-y-4">
            {/* Review Items */}
            <div className="flex flex-col md:flex-row gap-4">
              <Image
                src="/images/u1.png"
                alt="user"
                width={56}
                height={56}
                className="rounded-full block md:hidden lg:block "
              />
              <div>
                <h2 className="font-[700] text-[20px]">Alex Stanton</h2>
                <p className="font-[500] text-[14px] text-[#90A3BF]">
                  CEO at Bukalapak
                </p>
                <p className="font-[400] text-[14px] text-[#596780]">
                  We are very happy with the service from the MORENT App. Morent
                  has a low price and also a large variety of cars with good and
                  comfortable facilities.
                </p>
                
              </div>
            </div>
          </div>
          <div className="space-y-4">
            {/* Review Items */}
            <div className="flex flex-col md:flex-row gap-4">
              <Image
                src="/images/u2.png"
                alt="user"
                width={56}
                height={56}
                className="rounded-full block md:hidden lg:block "
              />
              <div>
                <h2 className="font-[700] text-[20px]">Skylar Dias</h2>
                <p className="font-[500] text-[14px] text-[#90A3BF]">
                  CEO at Amazon
                </p>
                <p className="font-[400] text-[14px] text-[#596780]">
                  We are very happy with the service from the MORENT App. Morent
                  has a low price and also a large variety of cars with good and
                  comfortable facilities.
                </p>
                
              </div>
            </div>
          </div>
        </div>

        
        <div className="flex md:max-w-[1016px] px-4 justify-between items-center mt-8 mb-8">
          <h2 className="font-semibold text-[16px] text-[#90A3BF]">Recomendation Car</h2>
          <button className="text-[#3563E9]">View All</button>
        </div>
           <div className="grid md:max-w-[980px] pl-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {recomendedCar.map((cars) => (
                    <div
                      key={cars.id}
                      className="flex flex-col p-2 bg-white space-y-8 rounded-[10px] md:max-w-[275px]  h-[388px] w-[240px] border-[1px] border-gray-200 shadow-lg"
                    >
                      <div className="flex justify-between items-center mb-4">
                        <div>
                          <div className="text-xl font-bold text-gray-900">{cars.name}</div>
                          <div className="text-sm text-slate-400">{cars.type}</div>
                        </div>
                        <button
                          aria-label={`${
                            cars.isFavorite ? "Remove from favorites" : "Add to favorites"
                          }`}
                          className="object-contain shrink-0 self-start w-6 aspect-square"
                        >
                          <Image
                            loading="lazy"
                            src={cars.isFavorite ? "/images/whita.png" : "/images/red.png"}
                            alt=""
                            height={24}
                            width={24}
                          />
                        </button>
                      </div>
                      <Image
                        loading="lazy"
                        src={cars.image}
                        alt={cars.name}
                        height={150}
                        width={250}
                        className="mb-6"
                      />
                      <div className="flex gap-2 text-sm text-slate-400 mb-6">
                        <div className="flex items-center gap-1">
                          <Image
                            src="/images/fuel.png"
                            alt="Gasoline"
                            width={24}
                            height={24}
                          />
                          <span>{cars.specs.gasoline}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Image
                            src="/images/manual.png"
                            alt="Steering"
                            width={24}
                            height={24}
                          />
                          <span>{cars.specs.steering}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Image
                            src="/images/people.png"
                            alt="Capacity"
                            width={24}
                            height={24}
                          />
                          <span>{cars.specs.capacity}</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="text-xl font-bold text-slate-900">
                            ${cars.price.current.toFixed(2)}{" "}
                            <span className="text-sm text-slate-400">/ day</span>
                          </div>
                          {cars.price.original && (
                            <div className="text-sm text-slate-400 line-through">
                              ${cars.price.original.toFixed(2)}
                            </div>
                          )}
                        </div>
                        <button className="px-6 py-2 bg-[#3563E9] text-white rounded-md">
                          Rent Now
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
 
    </>
  );
};
export default UpperSide