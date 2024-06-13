import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";


function Header(){
    const [sideBar, setSidebar] = useState(false);

    function displaySidemenu(){
        setSidebar(!sideBar)
    }


    return(
        <div className="header-section shadow-lg shadow-slate-600">
  <div className="flex justify-between items-center py-3 text-[#141623]">
            <div className="logo flex items-center">
                <p className="text-3xl font-semibold">Co<span className='text-[#00EA96]'>de</span>rs</p>
                <p className='text-xs font-semibold px-6 pt-1'><a href="mailto:aafrinshakila@hotmail.com?subject=Hi">aafrinshakila@hotmail.com</a></p>
            </div>
            <div className="menu flex gap-4 items-center text-md font-semibold">
                
                <BrowserRouter>
                <Link to='#'><p className='px-2'>Home</p></Link>
                <Link to='#about'><p className='px-2'>About</p></Link>
                <Link to='#portfolio'><p className='px-2'>Portfolio</p></Link>
                <Link to='#contact'> <p className=' bg-[#00EA96] px-5 py-2 rounded-r-3xl rounded-bl-3xl text-center'>Hire Me!</p></Link>
                </BrowserRouter>
                {/* <p className='px-2'><a href="#">Home</a></p>
                <p className='px-2'><a href="#">About</a></p>
                <p className='px-2'><a href="#">Portfolio</a></p>
                <p className=' bg-[#00EA96] px-5 py-2 rounded-r-3xl rounded-bl-3xl text-center'><a href="#">Hire Me!</a></p> */}
            </div>
            <div className="menu-bar text-lg font-semibold cursor-pointer" onClick={displaySidemenu}>
            <i class="fa-solid fa-bars bg-[#00EA96] px-3 py-2 rounded-md"></i>
            </div>
          
           </div>
           <div className={sideBar? 'side active' : 'side'}>
          <div className="close text-lg font-semibold cursor-pointer text-right mx-4 mt-4" onClick={displaySidemenu}>
           <i class="fa-solid fa-xmark bg-[#00EA96] p-2 rounded-md"></i>
           </div>
          <div className="side-menu text-lg font-semibold mt-2 mx-4" onClick={displaySidemenu}>
          <BrowserRouter>
                <Link to='#'><p className='pb-3'>Home</p></Link>
                <Link to='#about'><p className='pb-3'>About</p></Link>
                <Link to='#portfolio'><p className='pb-3'>Portfolio</p></Link>
                <Link to='#contact'> <p className=' bg-[#00EA96] px-5 py-2 rounded-r-3xl rounded-bl-3xl text-center'><a href="#">Hire Me!</a></p></Link>
                </BrowserRouter>
         </div>
         
          </div>
           
           
           
        </div>
          
         
    )
}

export default Header;