import Image from "next/image";
import Wrapper from "../layout/Wrapper";
import img1 from "../../public/assets/img1.jpg"
import Card1 from "../ui/Card1";

const Hero = () => {
    const data = [
        {
            title : "Bachelor's",
            desc : "20+ English-taught Bachelor's Programmes"
        },
        {
            title : "Master's",
            desc : "200+ English-taught Master's Programmes "
        },
        {
            title : "Professional Development",
            desc : "MBA's, executive Programmes and Master's classes"
            
        }
    ]
    return ( 
        <Wrapper>
            <div className="flex flex-col md:flex-row md:pt-20 top-28 relative">
                <div className="md:w-1/2 font-serif md:pl-24  md:pt-20">
                    <h2 className="text-4xl font-bold leading-relaxed">University of Amsterdam</h2>
                    <h3 className="md:text-3xl text-[1.7rem] leading-relaxed"> Inspiring generations since 1632. </h3>
                </div>
                <div className="relative md:h-[40rem] h-[40rem] md:mr-10 md:w-1/2 pt-10 md:pt-0 ">
                    <div className="w-[40rem] h-[28rem] bg-neutral-300 hidden md:absolute top-28 -right-10 opacity-20 -z-10 ">
                        
                    </div>
                    <div className="md:w-[40rem] w-full ">
                        <Image alt="" src={img1} className="" />
                    </div>

                </div>
                <div className="absolute w-full md:bottom-52 bottom-[1.5rem] md:left-24 flex flex-col items-center md:flex-row gap-3">
                    {data.map(item=>
                            <Card1 key={item} title={item.title} desc={item.desc} />
                        )}
                </div>
            </div>
        </Wrapper>
     );
}
 
export default Hero;