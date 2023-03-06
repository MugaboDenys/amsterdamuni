import Link from "next/link";
import Wrapper from "../layout/Wrapper";
import img6 from "../../public/assets/img6.png"
import img7 from "../../public/assets/img7.jpg"
import img8 from "../../public/assets/img8.jpg"
import img9 from "../../public/assets/img9.jpg"
import img10 from "../../public/assets/img10.jpg"
import Card2 from "../ui/Card2";


const News = () => {
    const data = [
        {
            image: img6,
            title : "Teflon is so slippery because it slides on itself",
            paragraph : "The surface of Teflon – the non-stick coating in your pan – is incredibly slippery. Thanks to research carried out at the Institute of Physics (UvA) and research centre ARCNL, we finally know where this slipperiness ..."
        },
        {
            image: img7,
            title : "The richest people don't turn out to be the smartest",
            paragraph : "Are the highest-paid jobs with the highest prestige performed by the smartest people? No, say sociologists who used unique information about 59,000 men to uncover the connection between intelligence and wealth."
        },
        {
            image: img8,
            title : "Why are our brains so huge?",
            paragraph : "Why are human brains three times larger than those of our closest living relatives? A diverse, high-quality diet and a long childhood in which we learn complex ways to acquire and gather food could be a major ..."
        },
        {
            image: img9,
            title : "Moratorium on research with Shell",
            paragraph : "The UvA will not enter into research collaborations with Shell or similar companies for the time being. A discussion with students and staff needs to be concluded first, according to the Executive Board. In recent ..."
        },
        {
            image: img10,
            title : "International Day of Women and Girls in Science: why role models matter",
            paragraph : "On 11 February, it’s the International Day of Women and Girls in Science. This day is dedicated to promoting full and equal access to and participation in science for everyone. Role models are an important way to ..."
        }
    ]
    return ( 
        <div className={'bg-gray1 w-full overflow-hidden'}>
            <div className="py-20 max-w-[1400px] mx-auto md:px-20">
                <div className="flex justify-between ">
                    <h2 className="md:text-2xl text-3xl font-serif">News</h2>
                    <Link href={'/'} className="text-2xl text-neutral-400" >{">"}</Link>
                </div>
                <div className=" md:ml-6 pt-10 w-[1400px] flex flex-nowrap overflow-x-scroll scrollbar gap-5">
                    {data.map(item=>
                        
                        <Card2 className={"min-w-[328px] bg-white"} key={item} title={item.title} img={item.image} paragraph={item.paragraph}/>
                    )}
                </div>
            </div>

        </div>
     );
}
 
export default News;