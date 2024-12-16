import * as React from 'react';
import Image from 'next/image';
import { LuArrowUpDown } from "react-icons/lu";
import { IoIosRadioButtonOn } from "react-icons/io";
import Link from 'next/link';
import { CiSquareCheck } from "react-icons/ci";
import { FaCheckSquare } from 'react-icons/fa';

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
  
const Car: CarType[] = [
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
    {id:5,
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
    {id:6,
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
    {id:7,
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
    {id:8,
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
  
    {id:9,
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
    {id:10,
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
    {id:11,
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
    {id:12,
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
    } 
    ]
const page = () => {
  return (
     <div className='md:max-w-[1440px]  bg-gray-100 mx-auto px-4 py-8 flex md:flex-row flex-col gap-4'>
        {/* Left Side */}
          <div className='md:max-w-[360px] bg-white ml-4 my-12 h-auto mt-16'>
              <ul className='w-[250px] h-auto px-8 mt-16 space-y-4'>
              <li className='text-[12px] font-[600] text-[#90A3BF]'>Type</li>
              <li className="flex gap-2"><FaCheckSquare size={22} className='text-[#3563E9] rounded-md   '/><p className='text-[20px] font-[600]'>Sport</p><span className='text-[#90A3BF]'>(10)</span></li>
              <li className="flex gap-2"><FaCheckSquare size={22} className='text-[#3563E9] rounded-md  '/><p className='text-[20px] font-[600]'>SUV</p><span className='text-[#90A3BF]'>(12)</span></li>
              <li className="flex gap-2"><CiSquareCheck size={24} className="rounded-md" /><p className='text-[20px] font-[600]'>MVP</p><span className='text-[#90A3BF]'>(16)</span></li>
              <li className="flex gap-2"><CiSquareCheck size={24} className="rounded-md" /><p className='text-[20px] font-[600]'>Sedan</p><span className='text-[#90A3BF]'>(20)</span></li>
              <li className="flex gap-2"><CiSquareCheck size={24} className="rounded-md" /><p className='text-[20px] font-[600]'>Coupe</p><span className='text-[#90A3BF]'>(14)</span></li>
              <li className="flex gap-2"><CiSquareCheck size={24} className="rounded-md" /><p className='text-[20px] font-[600]'>Hatchback</p><span className='text-[#90A3BF]'>(14)</span></li>

              </ul>

              <ul className='w-[250px] h-auto px-8 mt-16 space-y-4 '>
              <li className='text-[12px] font-[600] text-[#90A3BF]'>Category</li>
              <li className="flex gap-2"><FaCheckSquare size={22} className="rounded-md text-[#3563E9] border-[1px] "/><p className='text-[20px] font-[600]'>2 Person</p><span className='text-[#90A3BF]'>(10)</span></li>
              <li className="flex gap-2"><CiSquareCheck size={24} className="rounded-md" /><p className='text-[20px] font-[600]'>4 Person</p><span className='text-[#90A3BF]'>(12)</span></li>
              <li className="flex gap-2"><CiSquareCheck size={24} className="rounded-md" /><p className='text-[20px] font-[600]'>6 Person</p><span className='text-[#90A3BF]'>(14)</span></li>
              <li className="flex gap-2"><FaCheckSquare size={22} className='text-[#3563E9] rounded-md border-[1px]'/><p className='text-[20px] font-[600]'>8 Person</p><span className='text-[#90A3BF]'>(16)</span></li>
              </ul>
              <ul className='w-[250px] h-auto px-8 space-y-4 mt-16'>
                  <li className='text-[12px] font-[600] text-[#90A3BF]'>Price</li>
                  <div className='w-[14px] absolute border-2 ml-[10%] border-gray-200  bg-[#3563E9] rounded-full mt-[-10px] h-[14px]'></div>
                  <div className='w-[200px] mt-2  bg-[#3563E9]  rounded-xl text-[#90A3BF] h-[10px] '></div>
                  <p className='text-[20px] font-[600]'>Max. $100.00</p>
                  </ul>
          </div>
          {/* Right Side */}
          <div>
          <div className="max-w-[1015px] w-full bg-gray-100 mx-auto px-4 py-8">
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
      <div className='mt-12'></div>
        {/* Cards Section */}
        <div className="container md:max-w-[1015px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {Car.map((cars) => (
            <div
              key={cars.id}
              className="bg-white shadow-md space-y-8 rounded overflow-hidden hover:shadow-lg transition sm:w-[220px] w-[317px]  h-[388px] px-3"
            >
              <div className="flex justify-evenly  space-y-4 items-center mb-4">
                <div className='my-4'>
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
                      <Link href="/car-detail">
                      <button className="p-2 bg-[#3563E9] text-[12px] text-white rounded-md">
                  Rent Now
                          </button>
                      </Link>
              </div>
            </div>
          ))}
      </div>
     
      <div className='md:max-w-[734px] flex md:ml-[40%] ml-0 pl-12 flex-col md:flex-row justify-between'>
       <div className=' w-full h-[44px] mt-12 right-20 md:left-20'>
       <Link href="/"> <button className='w-[156px] h-[44px] text-white bg-[#3563E9] text-[16px] -2% rounded-[4px]'>Show more car</button>
       </Link>
        </div>
      <div className=' w-full h-[44px] mt-12  md:ml-[40%] right-20 md:left-20'>
        <p className='w-full md:pl-0 pl-32'>120 Cars</p>
      </div>
      </div>
    
              </div>
          </div>
          </div>
    );
  }
 
export default page