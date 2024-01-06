import React from 'react'
import NavLink from './navLink/NavLink'

export default function Links() {
    const links=[{
        title:"HomePage",
        path:"/"
    },
    {
        title:"About",
        path:"/about"
    },{
        title:"Blog",
        path:"/Blog"
    },{
        title:"Contact",
        path:"/Contact"
    }]

    const session=true;
    const isAdmin=true;
  return (

    <div className='flex justify-evenly h-full items-center'>
        {
        links.map((link)=>{
            return <NavLink item={link} key={link.title}/>
        })
        }
        {session?(
            <>
            {isAdmin && <NavLink item={{title:"Admin",path:"/admin"}} /> }
            <button className='p-2 bg-black text-white rounded-none'>Logout</button>
            </>
        ):(
            <NavLink item={{title:"Login",path:"/login"}} />
        )}
        </div>
  )
}
