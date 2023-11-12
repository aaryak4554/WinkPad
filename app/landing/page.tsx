import { Navbar } from "./_components/navbar";
import Image from "next/image";
import bgimage from '../../public/4d6420ef87866772b89083fc256c635a.png'
import { Heading } from './_components/heading'
import { Button } from "@/components/ui/button";
import { Footer } from "./_components/footer";

const landingpage = () => {
    return(
        <>
        <main className="flex flex-col items-center justify-between" >
            
            <div className="fixed bottom-10 top-auto right-0 md:bottom-0">
            <Image 
                src={bgimage} 
                alt="background-image"
            />
            </div>
            <Navbar/>
            <div className="flex items-center justify-start"><Heading/></div>
            <Button/>
            <Footer/>
        </main>
        </>
    )
} 
export default landingpage;