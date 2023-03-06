import Image from "next/image";
import Link from "next/link";
import arrow from "../../public/assets/arrow.svg"

const Card1 = ({title, desc, program}) => {
    return ( 
        <Link href={'/'} className="w-80 border hover:shadow-5xl duration-300 border-red-800 bg-white rounded-sm px-5 py-3 leading-loose">
            <h3 className="text-red-800">{title}</h3>
            <span className="flex justify-between items-start">
                <h4 className="text-sm text-neutral-700">{desc}</h4>
                <Image alt="" src={arrow} className="w-10" />
            </span>
            
        </Link>
     );
}
 
export default Card1;