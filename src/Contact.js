import { useState } from "react";
import axios from 'axios'
import { baseUrl } from "./Urls";

function Contact() {
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [message, setMessage] = useState('');
const [err, setErr] = useState(false);
const [success, setSuccess] = useState(false)

function handleName(e){
    setName(e.target.value)
}

function handleEmail(e){
    setEmail(e.target.value)
}

function handleMessage(e){
    setMessage(e.target.value)
}

const handleSubmit = () => {
    //   axios.post('http://localhost:5000/contactform', {name:name, email:email, message:message}).then((res)=>{
    //     console.log(res.data)
    //  }).catch((error)=>{
    //     console.log(error)
    //  })

    if(name !== '' && email !== '' && message !== ''){
        axios.post(`${baseUrl}/contactform`, {name:name, email:email, message:message})
        console.log('submitted successfully')
     setSuccess(true)
     setErr(false)
     setName('')
     setMessage('')
     setEmail('')
    }
    else{
        console.log('please enter all the values')
        setErr(true)
        setSuccess(false)
    }
}

return (
<div id='contact' className="contact-wrapper flex justify-between gap-10 flex-wrap">
<div className="contact-detail flex-grow">
    <div className="heading pb-3 text-white">

        <p className='text-4xl font-semibold'>Let's Talk Now</p>
        <div className="bar"></div>
        <p className='text-4xl text-[#00EA96]'>03</p>
    </div>
    <p className="text-[#EDEDED] text-lg">Start a Conversation Today!!</p>
    <div className="box-container pt-3">
        <div className="box bg-[#EDEDED] shadow-slate-950 shadow-lg rounded-md p-2 flex items-center gap-4 my-5">
            <div className="icon bg-[#00EA96] rounded-md"><i class="fa-solid fa-phone text-xl"></i></div>
            <div className="info">
                <p className="text-lg capitalize">call me</p>
                <p className="text-md font-semibold">+91 9597514711</p>
            </div>
        </div>
        <div className="box bg-[#EDEDED] shadow-slate-950 shadow-lg rounded-md p-2 flex items-center gap-4 my-5">
            <div className="icon bg-[#00EA96] rounded-md"><i class="fa-solid fa-envelope text-xl"></i></div>
            <div className="info">
                <p className="text-lg capitalize">email me</p>
                <p className="text-md font-semibold">aafrinshakila@hotmail.com</p>
            </div>
        </div>
        <div className="box bg-[#EDEDED] shadow-slate-950 shadow-lg rounded-md p-2 flex items-center gap-4 my-5">
            <div className="icon bg-[#00EA96] rounded-md"><i class="fa-solid fa-location-dot text-xl"></i></div>
            <div className="info">
                <p className="text-lg capitalize">address</p>
                <p className="text-md font-semibold">Bangalore, Karnataka, IN</p>
            </div>
        </div>
    </div>
    <div className="social-icons text-[#00EA96] text-lg flex gap-4">
        <a href="https://www.linkedin.com/in/aafrin-shahanas/" target="_blank"><i class="fa-brands fa-linkedin-in shadow-lg shadow-slate-950"></i></a>
        <a href="https://github.com/aafrinshahas" target="_blank"><i class="fa-brands fa-git shadow-lg shadow-slate-950"></i></a>
        <a href="https://www.behance.net/aafrinshahanas" target="_blank"><i class="fa-brands fa-behance shadow-lg shadow-slate-950"></i></a>
    </div>
</div>
<div className="form-container bg-[#141623] flex-grow shadow-lg shadow-slate-950 rounded-md">
    <p className="text-[#00EA96] text-3xl mb-4">Get a free quote now</p>

    <input placeholder="Full name" value={name} type="text" className="bg-transparent border rounded-md py-3 px-3 border-[#a6a7a9] my-3 text-[#EDEDED]" onChange={handleName}/>

    <input placeholder="Email" value={email}  type="email" className="bg-transparent border rounded-md py-3 px-3 border-[#a6a7a9] my-3 text-[#EDEDED]" onChange={handleEmail}/>
    <textarea placeholder="Write your message..." value={message} className="bg-transparent border rounded-md py-3 px-3 border-[#a6a7a9] my-3 text-[#EDEDED] h-24" onChange={handleMessage}/>
    {/* <input placeholder="Write your message..." className="bg-transparent border rounded-md py-3 px-3 border-[#a6a7a9] my-3 text-[#EDEDED]"/> */}
   {err?<p className="text-red-400 font-semibold text-xl">Please enter the all values</p>:''}
    {success?<p className="text-[#00EA96] font-semibold text-xl">Submitted Successfully</p>:''}
    
    <div className="btns">
        <button className='bg-[#00EA96] font-semibold px-5 py-2 mt-2 rounded-r-3xl rounded-bl-3xl uppercase' onClick={handleSubmit}>submit</button>
    </div>
</div>
</div>
)
}

export default Contact;