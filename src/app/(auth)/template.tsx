"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react'

// Templates are similar to layouts in that they wrap each child layout or page
// In templates, when a use navigates between routes that share a template, a new instance of component is mounted, 
// DOM elements are recreated, state is not preserved

// layout -> template -> page

export default function authLayout({children}: {
    children: React.ReactNode;
  }) {
    const pathname = usePathname()
    const navLinks = [
        {
            name: "Login",
            href: "/login"
        },
        {
            name: "Register",
            href: "/register"
        },
        {
            name: "forgot-password",
            href: "/forgot-password"
        }
    ]
    const [input, setInput] = useState("")
  return (
    <>
        <div className='mb-4'>
            <input value={input} onChange={e=> setInput(e.target.value)} 
                className='border p-2 rounded' 
                placeholder='Enter text'
            />
        </div>
        {navLinks.map((link) => {
            const isActive= pathname.startsWith(link.href)
            return (
                <Link
                    href={link.href} key={link.name}
                    className={isActive? "text-blue-500 mr-4" : "text-black mr-4"}
                >
                    {link.name}
                 </Link>
            )
        })}
        {children}
    </>
  )
}
