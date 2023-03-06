import Link from "next/link";

const { default: Wrapper } = require("../layout/Wrapper")

const Goto = () => {
    return ( 
        
        <Wrapper>
            <div>
                {["Alumni","PhD","Working at the UvA","UvA Experts","Staff website","Student website"].map(item=>
                        <Link href={'/'} key={item} className="pt-4 px-5 pb-7" >{item}</Link>
                    )}
            </div>
        </Wrapper>
     );
}
 
export default Goto;