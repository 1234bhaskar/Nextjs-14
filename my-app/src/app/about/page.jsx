import Image from 'next/image'
import React from 'react'

export default function page() {
  return (
    <div className='flex justify-center mt-5'>
      <div className='w-1/2 relative h-96 '>
        {/* <Image src={"/about.png"} fill/> */}

        {/* external image */}
        <Image src="https://images.pexels.com/photos/18515836/pexels-photo-18515836/free-photo-of-portrait-of-a-starling-standing-outdoors.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" fill/>
      </div>
    </div>
  )
}
