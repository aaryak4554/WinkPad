import logo2 from '../../../public/sticky-dark.png'
import logo from '../../../public/sticky-note (2).png'
import Link from "next/link";
import Image from "next/image";

export const Footer = () => {
    return (
        <>
        <div className="fixed w-full h-10 shadow-xl bottom-0">
            <div className="flex justify-between items-center h-full w-full px-6 2xl:px-10">
                <div>
                <Link href="/">
                    <Image 
                        className="cursor-pointer"
                        src={logo}
                        alt="logo"
                        width="30"
                        height="30"
                        priority
                    /> 
                </Link> 
                </div>
                <div>
                    <ul className="flex gap-x-3 text-black">
                        <li>Privacy Policy</li>
                        <li>Terms&Conditions</li>
                    </ul>
                </div>
                
            </div>
        </div>
        </>
    )
}