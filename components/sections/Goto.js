import Link from "next/link";
import Wrapper from "../layout/Wrapper";


const Goto = () => {
    return ( 
        
        <Wrapper className={"py-20 bg-white font-serif"}>
            <h2 className="text-3xl font-semibold">Go to: </h2>

            <div className="pt-10 grid md:grid-cols-3 grid-cols-1 gap-5">
                {["Alumni","PhD","Working at the UvA","UvA Experts","Staff website","Student website"].map(item=>
                        <Link href={'/'} key={item} className="pt-4 px-5 pb-7 border text-xl font-semibold hover:shadow-5xl duration-500 hover:text-red-700 hover:underline" >{item}</Link>
                    )}
            </div>
        </Wrapper>
     );
}
 
export default Goto;