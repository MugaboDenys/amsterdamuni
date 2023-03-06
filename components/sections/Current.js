import Wrapper from "../layout/Wrapper";
import Card2 from "../ui/Card2";
import img3 from "../../public/assets/img3.jpg"
import img4 from "../../public/assets/img4.png"
import img5 from "../../public/assets/img5.jpg"

const Current = () => {
    const data = [
        {
            image: img3,
            title : "Study in Amsterdam Week 20 - 24 February",
            paragraph : "Discover everything an international student needs to know about studying at the UvA."
        },
        {
            image: img4,
            title : "The UvA and the smart city",
            paragraph : "Find out how our cities are becoming smarter every day. UvA researchers are examining the pitfalls and the potential."
        },
        {
            image: img5,
            title : "Bachelor's Week 17 - 25 March",
            paragraph : "Discover your Bachelor's at the UvA."
        }
    ]
    return ( 
        <Wrapper className={"py-20"}>
            <h2 className="text-3xl py-10 font-serif font-bold">Current</h2>
            <div className="flex md:flex-row flex-col gap-10">
                
                {data.map(item=>
                    
                    <Card2 className={"md:w-[445px]"} key={item} title={item.title} img={item.image} paragraph={item.paragraph}/>
                )}
            </div>
        </Wrapper>
     );
}
 
export default Current;