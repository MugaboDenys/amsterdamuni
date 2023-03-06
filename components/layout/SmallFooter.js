import Image from "next/image";
import Link from "next/link";
import { BsChevronDown, BsChevronRight } from "react-icons/bs";
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp, FaYoutube } from "react-icons/fa";
import logo from "../../public/assets/footer.png"


const Smallfooter = () => {
    return ( 
        <div className="md:hidden block bg-black2 py-10 px-3">
            <Image alt="" src={logo} className="w-auto md:h-7 h-10 "/>
            <div className=" pt-10">
                {["Education & research","Go to", "Information for","Contact"].map((item,index)=>{
                    return(
                        <details href={'/'} key={index} className="cursor-pointer text-white pr-3 text-sm border-neutral-500 border-t py-4 ">
                            <summary className="flex items-center justify-between" aria-hidden={true}>
                                <h2 className="font-medium">{item}</h2>
                                <BsChevronDown />
                            </summary>
                            {index == 0 && ["Bachelor's programmes","Minors","Master's programmes","Professional development","Exchange","Summer School","PhD at UvA","Research at UvA"].map(item=>
                                    <span key={item} className="flex items-center text-sm">
                                        <span className="pt-2"><BsChevronRight /></span>
                                        <Link href={'/'} className="pt-2" >{item}</Link>
                                    </span>)
                            }
                            {index == 1 && ["Webmail for UvA staff","Webmail UvA students","Library","Canvas","SIS","Timetable","Course Catalogue","Vacancies","UvAshop.nl (Merchandise store)"
                                    ].map(item=>
                                    <span key={item} className="flex items-center text-sm">
                                        <span className="pt-2"><BsChevronRight /></span>
                                        <Link href={'/'} className="pt-2" >{item}</Link>
                                    </span>)}
                            {index == 2 && ["Prospective students","Current students","Staff","Journalists","Alumni","Donors","Employers","External suppliers"
                                    ].map(item=>
                            <span key={item} className="flex items-center text-sm">
                                <span className="pt-2"><BsChevronRight /></span>
                                <Link href={'/'} className="pt-2" >{item}</Link>
                            </span>)}
                            {index == 3 && ["Contact information","Locations","Contact Student Services","The UvA and social media"
                                    ].map(item=>
                            <span key={item} className="flex items-center text-sm">
                                <span className="pt-2"><BsChevronRight /></span>
                                <Link href={'/'} className="pt-2" >{item}</Link>
                            </span>)}
                                
                        </details>
                    )
                })}
            </div>
            <div className="ml-auto flex pt-10 flex-col order-1">
                <h3 className="text-neutral-300 text-center text-sm">Follow UvA on social media</h3>
                <div className="flex justify-center pt-5 gap-12 px-3">
                        <Link href={'/'}><FaFacebookF className="text-2xl text-neutral-300" /></Link>
                        <Link href={'/'}><FaTwitter className="text-2xl text-neutral-300" /></Link>
                        <Link href={'/'}><FaLinkedin className="text-2xl text-neutral-300" /></Link>
                        <Link href={'/'}><FaInstagram className="text-2xl text-neutral-300" /></Link>
                        <Link href={'/'}><FaWhatsapp className="text-2xl text-neutral-300" /></Link>
                        <Link href={'/'}><FaYoutube className="text-2xl text-neutral-300" /></Link>
                </div>
            </div>
            <div className="pt-5 flex justify-center text-xs md:order-1 order-2 items-center gap-x-3 text-neutral-300">
                <h3 className="">Copyright UvA 2023</h3>
                {[
                    "About the site",
                    "Privacy",
                    "Cookie settings"
                ].map(item=> <Link href={'/'} key={item} className="text-sm- hover:text-white" >{item}</Link>)}
            </div>
        </div>
     );
}
 
export default Smallfooter;