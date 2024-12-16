import React from 'react'
import UpperSide from './upperside'
import Leftside from './leftside'

const page = () => {
  return (
      <div className='md:max-w-[1440px] flex flex-col md:flex-row gap-4'>
          <Leftside />
          <UpperSide/>
        
    </div>
  )
}

export default page