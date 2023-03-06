const Wrapper = ({children, className}) => {
    return ( 
        <div className={`max-w-[1600px] mx-auto px-28 ${className} `}>
            {children}
        </div>
     );
}
 
export default Wrapper;