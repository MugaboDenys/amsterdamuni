import Wrapper from "./Wrapper";
import logo from "../../public/assets/footer.png"
import Image from "next/image";
import {BsChevronRight} from "react-icons/bs"
import {FaFacebookF, FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp, FaYoutube} from "react-icons/fa"
import Link from "next/link";
import FooterCol from "../ui/FooterCol";

const Footer = () => {
    return ( 
            <div className="py-10 bg-black2">
                <Wrapper className={"bg-black2 md:py-10 text-white border-b"}>
                        <Image alt="" src={logo} className="w-auto md:h-7 h-10 "/>
                        <div className="pt-5">
                            <div className="pt-2 grid md:grid-cols-4 grid-cols-1">
                                <FooterCol 
                                title={"Education & research"}
                                link={[
                                    "Bachelor's programmes",
                                    "Minors",
                                    "Master's programmes",
                                    "Professional development",
                                    "Exchange",
                                    "Summer School",
                                    "PhD at UvA",
                                    "Research at UvA"
                                ]}
                                />
                                <FooterCol
                                    title={"Go to"}
                                    link={[
                                        "Webmail for UvA staff",
                                        "Webmail UvA students",
                                        "Library",
                                        "Canvas",
                                        "SIS",
                                        "Timetable",
                                        "Course Catalogue",
                                        "Vacancies",
                                        "UvAshop.nl (Merchandise store)"
                                    ]}
                                />
                                <FooterCol
                                    title={"Information for"}
                                    link={[
                                        "Prospective students",
                                        "Current students",
                                        "Staff",
                                        "Journalists",
                                        "Alumni",
                                        "Donors",
                                        "Employers",
                                        "External suppliers"
                                    ]}
                                />
                                <FooterCol
                                    title={"Contact"}
                                    link={[
                                        "Contact information",
                                        "Locations",
                                        "Contact Student Services",
                                        "The UvA and social media"
                                    ]}
                                />
                            </div>

                        </div>
                </Wrapper>
                <Wrapper>
                    <div className="pt-10 flex md:flex-row flex-col">
                        <div className="flex flex-col md:order-1 order-2 items-center gap-x-3 text-neutral-300">
                            <h3 className="text-sm">Copyright UvA 2023</h3>
                            {[
                                "About the site",
                                "Privacy",
                                "Cookie settings"
                            ].map(item=> <Link href={'/'} key={item} className="text-sm hover:text-white" >{item}</Link>)}
                        </div>
                        <div className="ml-auto flex md:flex-row flex-col order-1 items-end">
                            <h3 className="text-neutral-300 text-sm">Follow UvA on social media</h3>
                            <div className="flex gap-3">
                                {[  <FaFacebookF/>,
                                    <FaTwitter/>,
                                    <FaLinkedin/>,
                                    <FaInstagram/>,
                                    <FaWhatsapp/>,
                                    <FaYoutube/>
                                ].map(item=> <Link href={'/'} key={item} className="text-2xl text-neutral-300" >{item} </Link>)}
                            </div>
                        </div>
                    </div>
                </Wrapper>
            </div>
     );
}
 
export default Footer;