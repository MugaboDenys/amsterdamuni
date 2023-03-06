import Wrapper from "./Wrapper";
import logo1 from "../../public/assets/logo1.png"
import Image from "next/image";
import Link from "next/link";
import {IoIosSearch} from "react-icons/io"
import {AiOutlineHeart} from "react-icons/ai"

const Navbar = () => {
    return ( 
        <Wrapper className={"shadow-5xl"}>
            <div className="py-5 flex ">
                <Link href={'/'}>
                    <Image alt="" src={logo1} className="h-10 w-auto" />
                </Link>
                <div className="ml-auto flex items-center gap-x-5">
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
        </Wrapper>
     );
}
 
export default Navbar;