import { Navbar } from "./_components/navbar";
import { Heading } from "./_components/heading";
import { Button } from "@/components/ui/button";
import { Footer } from "./_components/footer";

const mainpage = () => {
    return(
        <>
        <div className='min-h-full flex flex-col bg-customcolors-white'>
            <Navbar/>
            <Heading/>
            <Button>Enter</Button>
            <Footer/>
        </div>
        </>
    )
} 
export default mainpage;