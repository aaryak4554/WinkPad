"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo2 from '../../../public/sticky-dark.png'
import logo from '../../../public/sticky-note (2).png'
import { AiOutlineMenu } from 'react-icons/ai';
import { useState } from 'react';

export const Navbar = () => {
    const[menuOpen, setMenuOpen] = useState(false);
    const handleNav = () => {
        setMenuOpen(!menuOpen);
    }
    return (
        <>
        <nav className="fixed w-full h-20">
            <div className="flex justify-between items-center h-full w-full px-6 2xl:px-10">
                <Link href="/">
                <div className="flex items-center gap-x-2 text-2xl">
                        <Image 
                            className="cursor-pointer"
                            src={logo}
                            alt="logo"
                            width="50"
                            height="50"
                            priority
                        /> 
                     <div>WinkPad</div>
                </div>
                </Link> 
                <div className="hidden md:block sm-flex">
                    <ul className="flex gap-x-4 text-black">
                        <Link href="/">
                        <li className="hover:shadow-black">Login</li>
                        </Link>
                        <Link href="/">
                        <li className="hover:shadow-black">Sign Up</li>
                        </Link>
                        <li>darkmode</li>
                    </ul>
                </div>
                <div onClick={handleNav} className="block md:hidden cursor-pointer pl-24">
                    <AiOutlineMenu size={25} />
                </div>
                <div className={
                    menuOpen
                    ? "fixed right-0 top-20 w-[50%] sm-hidden h-[40%] bg-[#E5E0EF] p-10 ease-in duration-100" 
                    : "fixed right-[-100%] top-0 p-10 ease-in duration-100"
                }>
                    <div>
                    <ul className="flex-col py-4 text-black">
                        <Link href="/">
                        <li onClick={()=>setMenuOpen(false)}
                            className="hover:shadow-black">Login</li>
                        </Link>
                        <Link href="/">
                        <li onClick={()=>setMenuOpen(false)}
                            className="hover:shadow-black">Sign Up</li>
                        </Link>
                        <li  onClick={()=>setMenuOpen(false)}>darkmode</li>
                    </ul>
                    </div>

                </div>
            </div>
        </nav>
      </>
    )
}
