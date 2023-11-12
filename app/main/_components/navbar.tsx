import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
    return (
        <>
        <div className="w-full h-20 bg-customcolors-white sticky top-0 ">
              <ul className="md:flex gap-x-3 text-black">
                <li>
                  <Button>Enter</Button>
                </li>
                <li>
                  <Link href="/services">
                    <p>Account logo</p>
                  </Link>
                </li>
                <li>
                  <Link href="/contacts">
                    <p>darkmode</p>
                  </Link>
                </li>
              </ul>
        </div>
      </>
    )
}