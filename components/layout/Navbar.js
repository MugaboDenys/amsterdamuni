import Wrapper from "./Wrapper";
import logo1 from "../../public/assets/logo1.png"
import logo2 from "../../public/assets/logo2.png"
import arrow from "../../public/assets/arrow.svg"
import Image from "next/image";
import Link from "next/link";
import {IoIosMenu, IoIosSearch} from "react-icons/io"
import {AiFillRightSquare, AiOutlineClose, AiOutlineHeart} from "react-icons/ai"
import { useEffect, useState } from "react";
import { BsChevronRight } from "react-icons/bs";

const Navbar = () => {
    const [show, setShow] = useState(false);
    useEffect(() => {
        document.body.style.overflow = show ? "hidden" : "auto";
        return () => (document.body.style.overflow = "scroll");
      });

    const [animateHeader, setAnimateHeader] = useState(false);
    
    useEffect(() => {
        const listener = () => {
          if (window.scrollY > 150) {
            setAnimateHeader(true);
          } else setAnimateHeader(false);
        };
    
        window.addEventListener("scroll", listener);
        return () => {
          window.removeEventListener("scroll", listener);
        };
      }, []);
    return ( 
        
        <div className="bg-white relative">
            <div className={`${animateHeader ? "py-2":"py-5"} duration-500 hidden  md:flex fixed shadow-mini w-[1600px] mx-auto md:px-28 px-3 bg-white z-50 `}>
                <Link href={'/'}>
                    {animateHeader ? <Image alt="" src={logo2} className="hidden md:block h-14 w-auto" />
                    : <Image alt="" src={logo1} className="hidden md:block h-10 w-auto" />}
                    
                </Link>
                <div className="ml-auto hidden md:flex items-center gap-x-5">
                    <form action="#" className="flex items-center border focus:border-2 focus:border-blue-600 border-neutral-300 rounded-md py-2">
                        <input type="text" placeholder="Search..." className="text-neutral-400 text-sm pl-2 outline-none w-[20rem]" />
                        <span className="border-l-2 px-2 cursor-pointer border-neutral-400"><IoIosSearch className="text-3xl text-neutral-500" /></span>
                    </form>
                    <Link href={'/'} className="group flex items-center gap-3">
                        <h4 className="font-semibold group-hover:underline">compare programmes</h4>
                        <AiOutlineHeart className="group-hover:shadow-lg text-3xl text-[#6c1616] " />
                    </Link>
                    <Link href={'/'} className="py-2 px-3 border hover:shadow-lg rounded-sm border-neutral-800">
                       NL
                    </Link>
                </div>
            </div>
            <div className="flex md:hidden py-3 px-3 shadow-small bg-white fixed w-full z-50">
                <Image alt="" src={logo2} className="block md:hidden h-14 w-auto" />
                <div className="ml-auto flex gap-3 items-center">
                    <AiOutlineHeart className="text-4xl text-[#6c1616]"/>
                    <span className="border rounded border-black p-2 focus:shadow-5xl cursor-pointer "><IoIosSearch className="text-3xl text-neutral-700" /></span>
                    <span className="border rounded border-black px-3 py-2 focus:shadow-5xl cursor-pointer "><h2 className="text-xl">NL</h2></span>
                    <span onClick={() => setShow(!show)} className="border rounded bg-black2 border-black p-2 focus:shadow-5xl cursor-pointer duration-500 ">{show ? <AiOutlineClose className="text-3xl duration-500 text-white" /> :<IoIosMenu className="text-3xl duration-500 text-white" />}</span>
                </div>
            </div>
            {show && (
            <div className="fixed left-0 top-20 z-50  w-full  bg-neutral-300 py-5 text-[#1f1d21]">
              <span className="text-[#bc0031] flex items-center ml-16 text-sm">
                <Image src={arrow} alt="" />
                <h2>Home</h2>
              </span>
              <div className="grid grid-cols-1 font-normal mt-3  gap-2 ">
                {["education", "research", "news", "about", "library"].map(
                  (item, index) => {
                    return (
                      <Link href={item} key={index} className="border-t group flex items-center gap-1 border-t-white text-[16px] leading-[25px] ">
                            <span className="h-full px-2 py-2 bg-white">
                                <BsChevronRight className="bg-white text-black" />
                            </span>
                        <h3 className="group-hover:text-[#bc0031] hover:underline-offset-4 hover:underline">{item}</h3>
                      </Link>
                    );
                  }
                )}
              </div>
            </div>
          )}
        </div>
     );
}
 
export default Navbar;