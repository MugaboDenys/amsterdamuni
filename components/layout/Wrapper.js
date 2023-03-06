const Wrapper = ({children, className}) => {
    return ( 
        <div className={`max-w-[1600px] mx-auto md:px-28 px-3 ${className} `}>
            {children}
        </div>
     );
}
 
export default Wrapper;