import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import profile from './images/profile.png'
import place from './images/place.png'
import resume from './images/Aafrin.pdf'

function Home(){
    return(
        <>
   
         <div id='#' className="home-section flex justify-between gap-10 items-center flex-wrap shadow-xl">
            <div className="home-section__info text-white px-3 flex-grow">
                <div className="heading pb-3">
                <div className="bar"></div>
                <p className='text-lg font-thin'>Welcome To My Profile</p>
                </div>
              
                <p className='text-6xl font-semibold pb-3'>I am <span className='text-[#00EA96]'>Aafrin Shahanas</span></p>
                <p className='text-4xl font-semibold pb-3 uppercase'>mern stack developer</p>
                <p className='text-lg text-[#EDEDED] py-2'>Created and managed client websites using modern technologies and design trends while optimizing content for mobile and cross browser performance. Along with a working proficiency of the Git version control management.</p>
                <div className="btns  ">
                   
                <button className='px-5 py-2 rounded-r-3xl rounded-bl-3xl bg-[#00EA96] text-black font-semibold uppercase mt-4'><a href={resume} target="_blank">Download CV <i class="fa-solid fa-download pl-2"></i></a></button>
                <BrowserRouter>
                <Link to='#portfolio'> <button className='border border-[#00EA96] px-5 py-2 rounded-r-3xl rounded-bl-3xl font-semibold uppercase mt-4 text-[#00EA96]'> Projects</button></Link>
                </BrowserRouter>
               
                </div>
             
            </div>
            <div className="home-section__image flex-grow">
                <div className="image-container rounded-r-3xl rounded-bl-3xl">
                    <img src={profile} alt="profile"></img>
                </div>
                <div className='flex gap-3 pt-2 text-[#EDEDED]'>
                <p className='text-lg'>Follow me on -</p>
                <p className='hover:text-[#00EA96] font-semibold'><a href='https://www.linkedin.com/in/aafrin-shahanas/' target='_blank'>LinkedIn</a></p>
                <p>|</p>
                <p className='hover:text-[#00EA96] font-semibold'><a href='https://github.com/aafrinshahas' target='_blank'>GitHub</a></p>
                </div>
                
            </div>
        </div>
        </>
       
    )
}

export default Home;
