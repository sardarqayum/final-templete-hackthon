import * as React from 'react';
import Image from 'next/image';
import { LuArrowUpDown } from "react-icons/lu";
import { IoIosRadioButtonOn } from "react-icons/io";
import Link from 'next/link';
interface CarType {
  id: number;
  name: string;
  type: string;
  image: string;
  specs: {
    gasoline: string;
    steering: string;
    capacity: string;
  };
  price: {
    current: number;
    original?: number;
  };
  isFavorite: boolean;
}

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
  {id:7,
    name: "MG ZX Excite",
    type: "Hatchback",
    image: "/images/c9.png",
    specs: {
      gasoline: "90L",
      steering: "Manual",
      capacity: "4 people",
    },
    price: {
      current: 74,
   
    },
    isFavorite: true,
  },
  {id:8,
    name: "New MG ZS",
    type: "SUV",
    image: "/images/c1.png",
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
const PopularCar = () => {
  const popularcar:CarType[] = [
    {id:1,
      name: "Koenigsegg",
      type: "Sport",
      image: "/images/c1.png",
      isFavorite: true,
      specs: {
        gasoline: "90L",
        steering: "Manual",
        capacity: "2 people",
      },
      price:{
        current: 120,
      }
   
    },
    {id:2,
      name: "Nissan GT - R",
      type: "Sport",
      image: "/images/c2.png",
      specs: {
        gasoline: "80L",
        steering: "Manual",
        capacity: "2 people",
      },
      price: {
        current: 80,
        original:100 
      },
      isFavorite: false
    },
    {id:3,
      name: "Rolls - Royce",
      type: "Sedan",
      image: "/images/c3.png",
      specs: {
        gasoline: "70L",
        steering: "Manual",
        capacity: "4 people",
      },
      price: {
        current: 96,
      },
      isFavorite: true
    },
    {id:4,
      name: "Nissan GT - R",
      type: "Sport",
      image: "/images/c4.png",
      specs: {
        gasoline: "80L",
        steering: "Manual",
        capacity: "2 people",
      },
      price: {
        current: 80,
        original:100 
      },
      isFavorite: false
    },
  ]
  return (
    <div className="max-w-[1440px] bg-gray-100 mx-auto px-4 py-8">
       <div className="flex flex-cols-3 md:flex-row items-start gap-4 mt-8 bg-white rounded-lg shadow-md md:max-w-[1320px]  px-4 md:px-8 py-6">
        {/* Pick-Up Section */}
        <div className="flex flex-col gap-4">
          <span className="flex gap-2 items-center mb-4">
            <IoIosRadioButtonOn size={16} className="text-[#3563E9]" />
            <h3 className="text-lg font-medium">Pick-Up</h3>
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm mb-1">Locations</label>
              <select className="w-full border rounded-md p-2">
                <option>Select your city</option>
              </select>
            </div>
            <div>
              <label className="block text-sm mb-1">Date</label>
              <input type="date" className="w-full border rounded-md p-2" />
            </div>
            <div>
              <label className="block text-sm mb-1">Time</label>
              <input type="time" className="w-full border rounded-md p-2" />
            </div>
          </div>
        </div>

        {/* Switch Button */}
        <div className="flex justify-center items-center py-4">
          <button className="bg-blue-500 text-white p-3 md:p-4 rounded-full shadow-md hover:bg-blue-600 transition-all">
            <LuArrowUpDown />
          </button>
        </div>

        {/* Drop-Off Section */}
        <div className="flex flex-col gap-4">
          <span className="flex gap-2 items-center mb-4">
            <IoIosRadioButtonOn size={16} className="text-[#3563E9]" />
            <h3 className="text-lg font-medium">Drop-Off</h3>
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm mb-1">Locations</label>
              <select className="w-full border rounded-md p-2">
                <option>Select your city</option>
              </select>
            </div>
            <div>
              <label className="block text-sm mb-1">Date</label>
              <input type="date" className="w-full border rounded-md p-2" />
            </div>
            <div>
              <label className="block text-sm mb-1">Time</label>
              <input type="time" className="w-full border rounded-md p-2" />
            </div>
          </div>
        </div>
      </div>
        {/* First Categary */}
        <div className="flex md:max-w-[1320px] justify-between items-center mb-8">
          <h2 className="font-semibold text-[16px] text-[#90A3BF]">Popular Car</h2>
          <button className="text-[#3563E9]">View All</button>
        </div>
  
        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md::grid-cols-4 lg:grid-cols-4 gap-6">
          {popularcar.map((cars) => (
            <div
              key={cars.id}
              className="flex flex-col p-4 bg-white space-y-10 rounded-[10px] border-[1px] border-gray-200  h-[388px] w-[275px] shadow-md"
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
      <div className='mt-12'>
        {/* Second Categary */}
      <div className="flex md:max-w-[1320px] justify-between items-center mb-8">
          <h2 className="font-semibold text-[16px] text-[#90A3BF]">Recomendation Car</h2>
          <button className="text-[#3563E9]">View All</button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md::grid-cols-4 lg:grid-cols-4 gap-6">
          {recomendedCar.map((cars) => (
            <div
              key={cars.id}
              className="flex flex-col p-2 bg-white space-y-8 rounded-[10px]  h-[388px] w-[275px] border-[1px] border-gray-200 shadow-lg"
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
      <div className='md:max-w-[734px] flex md:ml-[40%] ml-0 pl-12 flex-col md:flex-row justify-between'>
       <div className=' w-full h-[44px] mt-12 right-20 md:left-20'>
       <Link href="/car-category"> <button className='w-[156px] h-[44px] text-white bg-[#3563E9] text-[16px] -2% rounded-[4px]'>Show more car</button>
       </Link>
        </div>
      <div className=' w-full h-[44px] mt-12  md:ml-[40%] right-20 md:left-20'>
        <p className='w-full md:pl-0 pl-32'>120 Cars</p>
      </div>
      </div>
    
      </div>
    );
  }
  
  export default PopularCar;