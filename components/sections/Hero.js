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
            <div className="flex pt-20 relative">
                <div className="w-1/2 font-serif pl-24 pt-20">
                    <h2 className="text-4xl font-bold">University of Amsterdam</h2>
                    <h3 className="text-3xl"> Inspiring generations since 1632. </h3>
                </div>
                <div className="relative h-[40rem] mr-10 w-1/2 ">
                    <div className="w-[40rem] h-[28rem] bg-neutral-300 absolute top-28 -right-10 opacity-20 -z-10 ">
                        
                    </div>
                    <div className="w-[40rem] ">
                        <Image alt="" src={img1} className="" />
                    </div>

                </div>
                <div className="absolute bottom-52 left-24 flex gap-3">
                    {data.map(item=>
                            <Card1 key={item} title={item.title} desc={item.desc} />
                        )}
                </div>
            </div>
        </Wrapper>
     );
}
 
export default Hero;