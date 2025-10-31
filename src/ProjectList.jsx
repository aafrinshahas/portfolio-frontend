import todo from './images/login-page.png'
import weather from './images/weather.png'
import aara from './images/aara.png'
import moms from './images/moms.png'
import random from './images/random.png'
import sharp from './images/sharp.png'
import bookapp from './images/bookapp.png'
import urban from './images/urban.png'
import chat from './images/chat-app.png'
import dashboard from './images/dashboard.png'
import { useState } from 'react'

function ProjectList(){
const List = [
{   id: 1,
img: bookapp,
title: 'Bookshelf',
desc: 'Bookshelf is a web application built with React.js and Tailwind CSS for the frontend, Express.js for the backend, and MongoDB Atlas for the database. It allows users to create accounts, log in, view book descriptions, and save their favorite books.',
link: 'https://bookapp-pi.vercel.app/',
github: 'https://github.com/aafrinshahas/bookapp-frontend'
},
{   id: 2,
img: chat,
title: 'Chat App',
desc: 'This project develops a two-way chat application allowing real-time message exchange between clients and administrators. Built with the MERN stack (MongoDB, Express.js, React, Node.js) and styled with Tailwind CSS, it uses Socket.IO for real-time communication.',
link: 'https://chat-app-beryl-three.vercel.app/',
github: 'https://github.com/aafrinshahas/chatapp-frontend'
},

{   id: 3,
img: dashboard,
title: 'Sample Dashboard',
desc: 'A responsive dashboard application built with Vite, React.js, and Tailwind CSS, featuring dark and light mode support, Chart.js-based data visualizations, and a dynamic routing structure using React Router. Includes pagination and search functionality on the orders page.',
link: 'https://ecom-ultj.vercel.app/',
github: 'https://github.com/aafrinshahas/ecom'
},
{   id: 4,
img: urban,
title: 'UrbanBazaar',
desc: 'This is a online store application built with React.js and Tailwind CSS for the frontend, Express.js for the backend, and MongoDB Atlas for the database. It allows users to create accounts, log in, view product, and add products for checkout page.',
link: 'https://urbanbazzar-dun.vercel.app/',
github: 'https://github.com/aafrinshahas/online-store-frontend'
},
{   id: 5,
img: todo,
title: 'Activity Tracker App',
desc: 'This is a activity tracker app built using React.js, Tailwind CSS for styling, React Router for navigation, and LocalStorage for storing the activity list.',
link: 'https://actodo-chi.vercel.app/',
github: 'https://github.com/aafrinshahas/actodo'
},
{   id: 6,
img: weather,
title: 'Weather App',
desc: 'This is a weather application built with React.js, Tailwind CSS, and Axios. Based on the user enter city name it fetches weather data from the OpenWeather API and displays it in the browser.',
link: 'https://weather-app-lake-tau-11.vercel.app/',
github: 'https://github.com/aafrinshahas/weather-app'
},

,
{   id: 7,
img: sharp,
title: 'Sharp & Suave Online Store',
desc: 'Welcome to Sharp & Suave, It is a responsive sample template for trendy mens fashion items. Our online store offers a curated collection of stylish clothing.',
link: 'https://aafrinshahas.github.io/nostra-web/',
github: 'https://github.com/aafrinshahas/nostra-web'
},

{   id: 8,
img: moms,
title: `Mom's Belief`,
desc: 'This project is a responsive landing page built using HTML, CSS, and JavaScript. It is designed to adapt and display properly on various devices, including desktops, tablets, and smartphones.',
link: 'https://aafrinshahas.github.io/moms-belief/',
github: 'https://github.com/aafrinshahas/moms-belief'
},
{   id: 9,
img: random,
title: 'Random Number Checker App',
desc: 'Check out this sleek and functional Random Number Checker built with React.js and styled using Tailwind CSS.',
link: 'https://random-number-checker.vercel.app/',
github: 'https://github.com/aafrinshahas/random-number-checker'
},
{   id: 10,
img: aara,
title: 'Aara Beauty Salon',
desc: 'This project is a responsive website for beauty salon built using HTML, CSS, and JavaScript. It is designed to adapt and display properly on various devices, including desktops, tablets, and smartphones.',
link: 'https://aafrinshahas.github.io/Aara-beauty-salon/',
github: 'https://github.com/aafrinshahas/Aara-beauty-salon'
}
]

const [visible, setVisible] = useState(3)

function handleView(){
setVisible((prev) => prev + 3)
}
console.log(List.length === 0)
return(
<>
<div className="card-container pt-6 flex justify-between flex-wrap gap-8 ">
{
List.slice(0,visible).map((item)=>{
return(
<div className="card shadow-lg shadow-slate-950 flex-grow" key={item.id}>
<div className="image-section">
<img src={item.img} className='img' alt='logo page'/>
<div className="overlay text-white text-2xl">
<a href={item.link} target='_blank'><i class="fa-regular fa-eye px-2"></i></a>
<a href={item.github} target='_blank'><i class="fa-brands fa-github px-2"></i></a>
</div>
</div> 
<h3 className='text-[#00EA96] py-2 font-semibold text-xl'>{item.title}</h3>
<p className='text-[#EDEDED]'>{item.desc}</p>
</div>
)
})
}

</div>
{visible < List.length && (
        <div className="btns text-center pt-14">
          <button
            className="font-semibold px-5 py-2 rounded-r-3xl rounded-bl-3xl uppercase text-black bg-[#00EA96]"
            onClick={handleView}
          >
            View More
          </button>
        </div>
      )}


</>

)
}

export default ProjectList;
