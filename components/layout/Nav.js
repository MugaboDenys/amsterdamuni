import Link from "next/link";
import Wrapper from "./Wrapper";

const Nav = () => {
    return ( 
       <Wrapper className={"bg-gray2 hidden md:block relative top-20 shadow-small z-20"}>
            <div className="py-3">
                <ul className="flex gap-5">
                {[  "Education",
                    "Research",
                    "News & Events",
                    "About the UvA",
                    "Library"
                ].map((item,index)=>
                    <li key={index} className="group">
                        <Link href={'/'} className="font-serif text-lg pb-4 border-b-2 border-transparent hover:border-red-900 hover:text-red-800 group">{item}</Link>
                        <div className={`absolute py-5 space-y-4 w-72 px-3 top-[3.38rem] z-10 ${item == "Education" ? "hidden group-hover:block" : "hidden"} hidden bg-gray2`}>
                            {["Bachelor's", "Masters","Professional Development","Summer Schools", "Open Programmes"].map(item =>
                                    <Link href={'/'} key={item} className="block hover:underline hover:text-red-900 hover:underline-offset-8">{item}</Link>
                                )}
                        </div>  
                        <div className={`absolute py-5 space-y-4 w-72 px-3 top-[3.38rem] z-10 ${item == "Research" ? "hidden group-hover:block" : "hidden"} hidden bg-gray2`}>
                            {["Research at the UvA", "PhD"].map(item =>
                                    <Link href={'/'} key={item} className="block hover:underline hover:text-red-900 hover:underline-offset-8">{item}</Link>
                                )}
                        </div>
                        <div className={`absolute py-5 space-y-4 w-72 px-3 top-[3.38rem] z-10 ${item == "News & Events" ? "hidden group-hover:block" : "hidden"} hidden bg-gray2`}>
                            {["News", "Events","Press Office","Corona Virus Information", "Ukrain Information and Support"].map(item =>
                                    <Link href={'/'} key={item} className="block hover:underline hover:text-red-900 hover:underline-offset-8">{item}</Link>
                                )}
                        </div>
                        <div className={`absolute py-5 space-y-4 w-72 px-3 top-[3.38rem] z-10 ${item == "About the UvA" ? "hidden group-hover:block" : "hidden"} hidden bg-gray2`}>
                            {["Bachelor's", "Masters","Professional Development","Summer Schools", "Open Programmes"].map(item =>
                                    <Link href={'/'} key={item} className="block hover:underline hover:text-red-900 hover:underline-offset-8">{item}</Link>
                                )}
                        </div>
                    </li>
                    
                )}
                
                </ul>
            </div>
       </Wrapper>
     );
}
 
export default Nav;