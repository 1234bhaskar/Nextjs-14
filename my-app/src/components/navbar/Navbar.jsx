import Link from 'next/link'
import React from 'react'
import Links from './links/Links'

export default function Navbar() {
  return (
    <div className='w-full flex justify-between bg-white text-black py-2'>
        <div className='font-bold text-3xl'>Logo</div>
        <div className='w-1/2'>
            <Links/>
            </div>
    </div>
  )
}
