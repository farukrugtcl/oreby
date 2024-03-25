import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set, push } from "firebase/database";
import { useNavigate } from 'react-router-dom';
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify'; 


const Signup = () => {
    // const notify = () => toast("Wow so easy!");

        let [fullName, setFullname]= useState('')
        let [email, setEmail]= useState('')
        let [password, setPassword]= useState('')
        let [error, setError] = useState()
        let [show, setShow] = useState(false)

        let navigate= useNavigate ()

        const auth = getAuth();
        const db = getDatabase();

        let handleFullname = (e)=>{
            setFullname(e.target.value);
        }

        let handleEmail= (e)=>{
            setEmail(e.target.value);
            setError("");
        }

        let handlepassword = (e)=>{
            setPassword(e.target.value);
        }

        let handleSubmit = ()=>{

            if(!email){
               setError('Please enter your email');
            }else if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
                setError('Enter your valid email  !');
            }
           

            createUserWithEmailAndPassword(auth, email, password)
        .then((user) => {
            set(ref(db, 'users/'+ user.user.uid), {
                username: fullName,
                email: email,
               
              });
  })
  .then(()=>{
    
    toast('🦄 Wow so easy!')
    
   
  }).then(()=>{
    setTimeout(()=>{
        navigate("/login")
    },2000)
  })

  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
        }

  return (
    <div className='container mx-auto'>

       <div className="">
        <h2 className='font-dm text-[#262626] font-bold text-[39px]'>Sign Up</h2>
        <span className='font-dm text-[#767676] font-bold text-[16px]'> <Link to='/'> Home </Link>/ Sign Up</span>
       </div>

    <div className="py-5">
        <h2 className='font-dm text-[#767676] font-normal text-[16px] w-[644px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</h2>
    </div>

    <div className="">
        <h2 className='font-dm text-[#262626] font-bold text-[30px]'>Your Personal Details</h2>
    <div className="w-[50%] flex justify-between py-10">
        <div className="w-[40%]">            
            <label className='font-dm text-[#262626] font-bold text-[16px]'>First Name</label>
            <input className='w-full font-dm text-[#262626] font-bold text-[14px] py-1' type="text" placeholder='First Name' onChange={handleFullname}/>           
        </div>

        <div className="w-[40%]">
            <label className='font-dm text-[#262626] font-bold text-[16px]'>Last Name</label>
            <input className='w-full font-dm text-[#262626] font-bold text-[14px] py-1' type="text" placeholder='Last Name' />           
        </div>
    </div>

    <div className="w-[50%] flex justify-between mb-10">
        <div className="w-[40%]">            
            <label className='font-dm text-[#262626] font-bold text-[16px]'>Email address</label>
            <input className='w-full font-dm text-[#262626] font-bold text-[14px] py-1' type="email" placeholder='company@domain.com' onChange={handleEmail} />           
        <p className='text-red-500'>{error}</p>
        </div>

        <div className="w-[40%]">
            <label className='font-dm text-[#262626] font-bold text-[16px]'>Telephone</label>
            <input className='w-full font-dm text-[#262626] font-bold text-[14px] py-1' type="text" placeholder='Telephone' />           
        </div>
    </div>

    </div>       

    <div className="">
        <h2 className='font-dm text-[#262626] font-bold text-[30px]'>New Customer</h2>
    <div className="w-[50%] flex justify-between py-10">
        <div className="w-[40%]">            
            <label  className='font-dm text-[#262626] font-bold text-[16px]'>Address 1</label>
            <input className='w-full font-dm text-[#262626] font-bold text-[14px] py-5'  type="text" placeholder='Address 1' />           
        </div>

        <div className="w-[40%]">
            <label className='font-dm text-[#262626] font-bold text-[16px]'>Address 2</label>
            <input className='w-full font-dm text-[#262626] font-bold text-[14px] py-5'  type="text" placeholder='Address 2' />           
        </div>
    </div>

    <div className="w-[50%] flex justify-between mb-10">
        <div className="w-[40%]">            
            <label className='font-dm text-[#262626] font-bold text-[16px]'>City</label>
            <input className='w-full font-dm text-[#262626] font-bold text-[14px] py-1' type="text" placeholder='City' />           
        </div>

        <div className="w-[40%]">
            <label className='font-dm text-[#262626] font-bold text-[16px]'>Post</label>
            <input className='w-full font-dm text-[#262626] font-bold text-[14px] py-1'  type="text" placeholder='Post' />           
        </div>
    </div>

    <div className="w-[50%] flex justify-between mb-10">
        <div className="w-[40%]">            
            <label className='font-dm text-[#262626] font-bold text-[16px]'>Division</label>
            <input className='w-full font-dm text-[#262626] font-bold text-[14px] py-1' type="text" placeholder='Division' />           
        </div>

        <div className="w-[40%]">
            <label className='font-dm text-[#262626] font-bold text-[16px]'>Dist</label>
            <input className='w-full font-dm text-[#262626] font-bold text-[14px] py-2' type="text" placeholder='Dist' />           
        </div>
    </div>
    

    <h2 className='font-dm text-[#262626] font-bold text-[30px]'>Your Password</h2>
    <div className="w-[50%] flex justify-between mb-10">

    <div className="w-[40%] relative">            
            <label className='font-dm text-[#262626] font-bold text-[16px]'>Password</label>
            <input className='w-full font-dm text-[#262626] font-bold text-[14px]' type={show ? "text" :"password"} placeholder='password' onChange={handlepassword}/>

              <div onClick={()=>setShow(!show)} className="absolute top-[65%]  right-3">
                {show ? <FaRegEye />:<FaRegEyeSlash />}             
              </div> 
    </div>

        <div className="w-[40%]">
            <label className='font-dm text-[#262626] font-bold text-[16px]'>Repeat Password</label>
           <input className='w-full font-dm text-[#262626] font-bold text-[14px] ' type="password" placeholder='Repeat Password' />     
        </div>
    </div>

    </div>

<div className="pb-5">
    <div className="flex gap-x-5 pb-5">
    <input type="checkbox" /> 
    <h2 className='font-dm text-[#767676] font-normal text-[16px]'>I have read and agree to the Privacy Policy</h2>
    </div>

    <div className="flex gap-x-5">
        <h2 className='font-dm text-[#767676] font-normal text-[16px]'>Subscribe Newsletter</h2>
        <div className="flex gap-5">
        <input type="checkbox" /> <h3 className='font-dm text-[#767676] font-normal text-[16px]'>Yes</h3></div>
        <div className="flex gap-x-5">
        <input type="checkbox" /> <h3 className='font-dm text-[#767676] font-normal text-[16px]'>No</h3></div>
    </div>
</div>

    <div className="">
<div className="h-[40px] w-[100px] bg-black  mb-20">

<div onClick={handleSubmit}>
<Link >
    <h3 className='font-dm text-[#fff] font-bold text-[16px] justify-center items-center flex pt-2'>Sign in</h3>
    </Link> 
    <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"

/>
</div>   

</div>



    <div className="mt-[-60px] mb-10">
        <h2 className='font-dm text-[#262626] font-bold text-[16px]'>Already have account ? please,<Link to="/Login">Login</Link></h2>
     </div>

    </div>

    </div>
  )
}

export default Signup