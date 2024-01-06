"use client";
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function NavLink({item}) {
  const pathName=usePathname();
    return (
      <Link
       href={item.path}
      className={`${pathName===item.path && 'bg-blue-950 text-white p-2 rounded-lg'}`}
      >{item.title}</Link>
    )
}
