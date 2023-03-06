import Link from "next/link";
import { BsChevronRight } from "react-icons/bs";

const FooterCol = ({link=[], title}) => {
    return ( 
        <div>
            <div className="pt-5">
                <h2 className="font-semibold">{title}</h2>
                <div>
                {link.map(item=>
                <span key={item} className="flex items-center text-sm">
                    <span className="pt-2"><BsChevronRight /></span>
                    <Link href={'/'} className="pt-2" >{item}</Link>
                </span>
            )}
                </div>
            </div>
        </div>
     );
}
 
export default FooterCol