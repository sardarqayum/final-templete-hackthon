import React from 'react'
import { CiSquareCheck } from "react-icons/ci";
import { FaCheckSquare } from 'react-icons/fa';

const Leftside = () => {
  return (
      <div>
             {/* Left Side */}
                      <div className='md:max-w-[360px] bg-white ml-4 my-12 h-[900px] mt-16'>
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
          </div>
  )
}

export default Leftside