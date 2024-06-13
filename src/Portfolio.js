import ProjectList from './ProjectList'

import './style.css';
function Portfolio(){
    return(
        <div id='portfolio' className="portfolio_wrapper">
            <div className="heading pb-3 text-white">
                
                <p className='text-4xl font-semibold'>Professional Work</p>
                <div className="bar"></div>
                <p className='text-4xl text-[#00EA96]'>02</p>
                </div>
                <p className="text-[#EDEDED] capitalize text-lg">a completed projects showcases</p>
                <ProjectList/>
                
        </div>
    )
}

export default Portfolio;