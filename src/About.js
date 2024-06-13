import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import html from './logos/html.png'
import css from './logos/css.png'
import bootstrap from './logos/bootstrap.png'
import tailwindcss from './logos/tailwindcss.png'
import javascript from './logos/javascript.png'
import reactjs from './logos/reactjs.png'
import expressjs from './logos/expressjs.png'
import nodejs from './logos/nodejs.png'
import mongodb from './logos/mongodb.png'
import github from './logos/github.png'

function About(){
return(
<>


<div id='about' className='about-section flex justify-between flex-wrap gap-x-10 gap-y-6'>
<div className="about-section__info flex-grow">
<div className="heading pb-3 text-white">
    
    <p className='text-4xl font-semibold'>About Me</p>
    <div className="bar"></div>
    <p className='text-4xl text-[#00EA96]'>01</p>
    </div>
    <p className='text-[#EDEDED] text-lg my-2'>As a dedicated MERN stack developer with 4 months of experience in web development and 2 years in frontend
development. Proficient in HTML, CSS, JavaScript, and React.js for crafting user interfaces. Skilled in building
robust backend systems with Node.js and Express.js, and adept in MongoDB for database management. Equipped
with Git version control, I’m driven to create visually appealing user experiences in MERN stack development.</p>
<div className="btns">
<BrowserRouter>
    <Link to='#portfolio'><button className='bg-[#00EA96] font-semibold px-5 py-2 mt-4 rounded-r-3xl rounded-bl-3xl uppercase'><a href='#'>explore project</a></button></Link></BrowserRouter>

</div>

</div>

<div className="about-section__exp flex-grow">
<div className="btns">
<p className='font-semibold px-5 py-2 rounded-r-3xl rounded-bl-3xl uppercase border border-[#00EA96] text-[#00EA96] w-48 text-center'>experience</p>
</div>
<div className="list-container my-2">
    <div className="list border-[#00EA96] border-b-2 my-3">
        <p className='text-white py-2 text-lg font-semibold'>Web Developer</p>
        <div className='text-[#EDEDED] flex justify-between py-2'>
            <p>Greynium Technologies, Bengaluru</p>
            <p>January 2024 - Present</p>
        </div>
    </div>
    <div className="list border-[#00EA96] border-b-2 my-3">
        <p className='text-white py-2 text-lg font-semibold'>HTML Developer</p>
        <div className='text-[#EDEDED] flex justify-between py-2 '>
            <p>RR Donnelley, Chennai</p>
            <p>January 2022 – November 2023</p>
        </div>
    </div>
    
</div>
</div>
</div>
<div className="skills bg-black flex gap-10 justify-center flex-wrap">
<div className="skill-logo shadow-md shadow-slate-500 rounded-md border border-[#00EA96] border-t-0 border-r-0 ">
    <img src={html} alt={html}/>
</div>
<div className="skill-logo shadow-md shadow-slate-500 rounded-md border border-[#00EA96] border-t-0 border-r-0">
    <img src={css} alt={css}/>
</div>
<div className="skill-logo shadow-md shadow-slate-500 rounded-md border border-[#00EA96] border-t-0 border-r-0">
    <img src={bootstrap} alt={bootstrap}/>
</div>
<div className="skill-logo shadow-md shadow-slate-500 rounded-md border border-[#00EA96] border-t-0 border-r-0">
    <img src={tailwindcss} alt={tailwindcss}/>
</div>
<div className="skill-logo shadow-md shadow-slate-500 rounded-md border border-[#00EA96] border-t-0 border-r-0">
    <img src={javascript} alt={javascript}/>
</div>
<div className="skill-logo shadow-md shadow-slate-500 rounded-md border border-[#00EA96] border-t-0 border-r-0">
    <img src={reactjs} alt={reactjs}/>
</div>
<div className="skill-logo shadow-md shadow-slate-500 rounded-md border border-[#00EA96] border-t-0 border-r-0">
    <img src={expressjs} alt={expressjs}/>
</div>
<div className="skill-logo shadow-md shadow-slate-500 rounded-md border border-[#00EA96] border-t-0 border-r-0">
    <img src={nodejs} alt={nodejs}/>
</div>
<div className="skill-logo shadow-md shadow-slate-500 rounded-md border border-[#00EA96] border-t-0 border-r-0">
    <img src={mongodb} alt={mongodb}/>
</div>
<div className="skill-logo shadow-md shadow-slate-500 rounded-md border border-[#00EA96] border-t-0 border-r-0">
    <img src={github} alt={github}/>
</div>
</div>
</>
)
}

export default About;