import Image from "next/image";
import Link from "next/link";

const Card2 = ({img, title, paragraph, className}) => {
    return ( 
        <Link href={'/'} className={`group font-serif hover:shadow-5xl duration-500 space-y-5 pb-5 border ${className}`}>
            <Image alt="" src={img} className="w-full h-44 object-cover"/>
            <h3 className="font-bold text-2xl px-5 group-hover:text-red-700 group-hover:underline group-hover:underline-offset-8 duration-300">{title}</h3>
            <p className="px-5">{paragraph}</p>
        </Link>
     );
}
 
export default Card2;