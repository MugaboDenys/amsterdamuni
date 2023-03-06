import Wrapper from "./Wrapper";
import logo1 from "../../public/assets/logo1.png"
import Image from "next/image";
import Link from "next/link";
import {IoIosSearch} from "react-icons/io"
import {AiOutlineHeart} from "react-icons/ai"
import Navbar from "./Navbar";
import Nav from "./Nav";

const Header = () => {
    return ( 
        <div>
            <Navbar/>
            <Nav/>
        </div>
     );
}
 
export default Header;