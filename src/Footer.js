import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

function Footer(){
    return(
        <div className="footer-wrapper flex justify-between flex-wrap items-center text-white gap-3">
            <p className="text-3xl font-semibold">Co<span className='text-[#00EA96]'>de</span>rs</p>
            <p className="text-sm">&copy; 2024 Coders, All Rights Reserved</p>
            <div className="footer-menu flex items-center justify-center gap-x-4 text-sm font-semibold">
            <BrowserRouter>
            <Link to='#'><p className='px-2'>Home</p></Link>
                <Link to='#about'><p className='px-2'>About</p></Link>
                <Link to='#portfolio'><p className='px-2'>Portfolio</p></Link>
                <Link to='#contact'> <p className='border border-[#00EA96] px-5 py-2 rounded-r-3xl rounded-bl-3xl'>Hire Me!</p></Link>
            </BrowserRouter>
            {/* <p className='px-2'><a href="#">Home</a></p>
                <p className='px-2'><a href="#">About</a></p>
                <p className='px-2'><a href="#">Portfolio</a></p>
                <p className='border border-[#00EA96] px-5 py-2 rounded-r-3xl rounded-bl-3xl'><a href="#">Hire Me!</a></p> */}
            </div>
        </div>
    )
}

export default Footer;