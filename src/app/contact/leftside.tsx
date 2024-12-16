import React from 'react'
import { IoIosRadioButtonOn } from 'react-icons/io'
import Image from 'next/image'
const Leftside = () => {
    return (
       
        <div>
            {/*Main div*/}
            <div className='md:max-w-[852px] h-[2176px] space-y-8 '>
            {/* First div */}
          <div className='w-[852px] h-[336px] bg-white mx-8 rounded-md'> 
                    <section className='my-8'>
                    <h2 className='text-[20] font-bold px-8 py-4'>Billing Info</h2>
                    <span className='flex justify-between px-8 w-[852px]'><p className='text-[#90A3BF] text-[14px] font-[500]'>Please enter your billing info</p><p className='text-[#90A3BF] text-[14px] font-[500]'>Step 1 of 4</p></span>
                    </section>
                    <div className='bg-white flex flex-wrap gap-4'>
                     
                        <span className='px-8 w-[386px] h-[92px]'>
                            <label htmlFor="name" className='text-[16px] font-[600]'>Name</label> <br />
                            <input type="text" placeholder='Yourname' className='px-8 text-[14px] bg-[#F6F7F9] text-[#90A3BF] w-[386px] h-[56px] rounded-md font-[400]'/>
                        </span>
                        <span className='px-8 w-[386px] h-[92px]'>
                            <label htmlFor="name" className='text-[16px] font-[600]'>Phone Number</label> <br />
                            <input type="text" placeholder='Phonenumber' className='px-8 text-[14px] bg-[#F6F7F9] text-[#90A3BF] w-[386px] h-[56px] rounded-md font-[400]'/>
                        </span>
                       
                        <div className='bg-white flex flex-wrap gap-4'>
                        <span className='px-8 w-[386px] h-[92px]'>
                            <label htmlFor="name" className='text-[16px] font-[600]'>Address</label> <br />
                            <input type="text" placeholder='Address' className='px-8 text-[14px] bg-[#F6F7F9] text-[#90A3BF] w-[386px] h-[56px] rounded-md font-[400]'/>
                        </span>
                        <span className='px-8 w-[386px] h-[92px]'>
                            <label htmlFor="name" className='text-[16px] font-[600]'>Town/City</label> <br />
                            <input type="text" placeholder='Town or City' className='px-8 text-[14px] bg-[#F6F7F9] text-[#90A3BF] w-[386px] h-[56px] rounded-md font-[400]'/>
                        </span>
                     </div>
                       
                    </div>
          </div>
              {/* Second Div */}
              <div className='w-[852px] h-[664px] bg-white mx-8 rounded-md'> 
                    <section className='my-8'>
                    <h2 className='text-[20] font-bold px-8 py-4'>Rental Info</h2>
                    <span className='flex justify-between px-8 w-[852px]'><p className='text-[#90A3BF] text-[14px] font-[500]'>Please select your rental date</p><p className='text-[#90A3BF] text-[14px] font-[500]'>Step 2 to 4</p></span>
                    </section>
                    <div>
                         <span className="flex mx-8 gap-2 items-center mb-4">
                                    <IoIosRadioButtonOn size={16} className="text-[#3563E9]" />
                                    <h3 className="text-lg font-medium">Pick-Up</h3>
                                  </span>
                    </div>
                    <div className='bg-white grid mx-8 grid-cols-1 sm:grid-cols-2 gap-4'>
                     
                        <span className=' w-[386px] h-[92px]'>
                            <label htmlFor="name" className='text-[16px] font-[600]'>Location</label> <br />
                            <select  className='px-8 text-[14px] bg-[#F6F7F9] text-[#90A3BF] w-[386px] h-[56px] rounded-md font-[400] border-none '>
                                <option value="Select Your city" >Select Your city</option>
                            </select>
                        </span>
                        <span className=' w-[386px] h-[92px]'>
                            <label htmlFor="name" className='text-[16px] font-[600]'>Time</label> <br />
                            <select className='px-8 text-[14px] bg-[#F6F7F9] text-[#90A3BF] w-[386px] h-[56px] rounded-md font-[400]'>
                                <option value="Select Your time"  >Select Your time</option>
                            </select>
                        </span>
                        <span className=' w-[386px] h-[92px]'>
                            <label htmlFor="name" className='text-[16px] font-[600]'>Date</label> <br />
                            <select className='px-8 text-[14px] bg-[#F6F7F9] text-[#90A3BF] w-[386px] h-[56px] rounded-md font-[400]'>
                                <option value="Select Your time" >Select Your date</option>
                            </select>
                        </span>
                        </div>
                        <div>
                         <span className="flex mx-8 gap-2 items-center mb-4">
                                    <IoIosRadioButtonOn size={16} className="text-[#3563E9]" />
                                    <h3 className="text-lg font-medium">Drop Down</h3>
                                  </span>
                    </div>
                        <div className='bg-white grid grid-cols-1 mx-8 sm:grid-cols-2 gap-4'>
                        <span className=' w-[386px] h-[92px]'>
                            <label htmlFor="name" className='text-[16px] font-[600]'>Location</label> <br />
                            <select  className='px-8 text-[14px] bg-[#F6F7F9] text-[#90A3BF] w-[386px] h-[56px] rounded-md font-[400] border-none '>
                                <option value="Select Your city" >Select Your city</option>
                            </select>
                        </span>
                        <span className=' w-[386px] h-[92px]'>
                            <label htmlFor="name" className='text-[16px] font-[600]'>Time</label> <br />
                            <select className='px-8 text-[14px] bg-[#F6F7F9] text-[#90A3BF] w-[386px] h-[56px] rounded-md font-[400]'>
                                <option value="Select Your time"  >Select Your time</option>
                            </select>
                        </span>
                        <span className=' w-[386px] h-[92px]'>
                            <label htmlFor="name" className='text-[16px] font-[600]'>Date</label> <br />
                            <select className='px-8 text-[14px] bg-[#F6F7F9] text-[#90A3BF] w-[386px] h-[56px] rounded-md font-[400]'>
                                <option value="Select Your time" >Select Your date</option>
                            </select>
                        </span>
                   
                       
                    </div>
          </div>
              {/* Third div */}
              <div className='w-[852px] h-[336px] bg-white mx-8 rounded-md'> 
                    <section className='my-8'>
                    <h2 className='text-[20] font-bold px-8 py-4'>Payment Method</h2>
                    <span className='flex justify-between px-8 w-[852px]'><p className='text-[#90A3BF] text-[14px] font-[500]'>Please enter your payment method</p><p className='text-[#90A3BF] text-[14px] font-[500]'>Step 3 of 4</p></span>
                    </section>

                    <div className='flex justify-between'>
                         <span className="flex mx-8 gap-2 items-center mb-4">
                                    <IoIosRadioButtonOn size={16} className="text-[#3563E9]" />
                                    <h3 className="text-lg font-medium">Credit Card</h3>
                                  </span>
                        <Image src="/images/visa.png" alt="paypal" width={ 92} height={20} className='p-4'/>
                    </div>


                    <div className='bg-white flex flex-wrap gap-4'>
                     
                        <span className='px-8 w-[386px] h-[92px]'>
                            <label htmlFor="name" className='text-[16px] font-[600]'>Card Number</label> <br />
                            <input type="text" placeholder='Card number' className='px-8 text-[14px] bg-[#F6F7F9] text-[#90A3BF] w-[386px] h-[56px] rounded-md font-[400]'/>
                        </span>
                        <span className='px-8 w-[386px] h-[92px]'>
                            <label htmlFor="name" className='text-[16px] font-[600]'>Expration Date</label> <br />
                            <input type="date" placeholder='Phonenumber' className='px-8 text-[14px] bg-[#F6F7F9] text-[#90A3BF] w-[386px] h-[56px] rounded-md font-[400]'/>
                        </span>
                       
                        <div className='bg-white flex flex-wrap gap-4'>
                        <span className='px-8 w-[386px] h-[92px]'>
                            <label htmlFor="name" className='text-[16px] font-[600]'>Card Holder</label> <br />
                            <input type="text" placeholder='card holder' className='px-8 text-[14px] bg-[#F6F7F9] text-[#90A3BF] w-[386px] h-[56px] rounded-md font-[400]'/>
                        </span>
                        <span className='px-8 w-[386px] h-[92px]'>
                            <label htmlFor="name" className='text-[16px] font-[600]'>CVC</label> <br />
                            <input type="text" placeholder='CVC' className='px-8 text-[14px] bg-[#F6F7F9] text-[#90A3BF] w-[386px] h-[56px] rounded-md font-[400]'/>
                        </span>
                     </div>
                       
                    </div>
                    <span>
                        <input type="radio" /><Image src="/images/paypal.png" alt="paypal" width={ 92} height={20} className='p-4'/>
                    </span>
                    <span>
                        <input type="radio" /><Image src="/images/bitcoin.png" alt="bitcoin" width={ 92} height={20} className='p-4'/>
                    </span>
          </div>
              {/* Fourth div */}
          <div>
              
                </div>
                </div>
    </div>
  )
}

export default Leftside