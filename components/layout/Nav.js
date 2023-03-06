import Link from "next/link";
import Wrapper from "./Wrapper";

const Nav = () => {
    return ( 
       <Wrapper className={"bg-neutral-200 hidden md:block shadow-5xl"}>
            <div className="py-3">
                <ul className="flex gap-5">
                {[  "Education",
                    "Research",
                    "News & Events",
                    "About the UvA",
                    "Library"
                ].map((item,index)=>
                    <li key={index}>
                        <Link href={'/'} className="font-serif text-lg hover:text-red-600 hover:underline ">{item}</Link>
                    </li>
                )}
                </ul>
            </div>
       </Wrapper>
     );
}
 
export default Nav;