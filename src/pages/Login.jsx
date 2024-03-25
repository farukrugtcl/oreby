import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='container mx-auto'>

        <div className="">
            <h2 className='font-dm text-[#262626] font-bold text-[39px]'>Login</h2>
            <span className='font-dm text-[#767676] font-bold text-[16px]'> <Link to='/'> Home </Link>/ Login</span>
       </div>

       <div className="py-5">
        <h2 className='font-dm text-[#767676] font-normal text-[16px] w-[644px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</h2>
        </div>

        <h2 className='font-dm text-[#262626] font-bold text-[30px]'>Returning Customer</h2>

    <div className="w-[50%] flex justify-between py-10">
    <div className="w-[40%]">            
            <label className='font-dm text-[#262626] font-bold text-[16px]'>Email address</label>
            <input className='w-full font-dm text-[#262626] font-bold text-[14px] py-1' type="text" placeholder='company@domain.com' />           
        </div>

        <div className="w-[40%]">            
            <label className='font-dm text-[#262626] font-bold text-[16px]'>Password</label>
            <input className='w-full font-dm text-[#262626] font-bold text-[14px]' type="password" placeholder='password' />       
        </div>
    </div>
      
    <div className="h-[30px] w-[120px] ring-2 ring-[#521818] hover:bg-black duration-500 mb-20">

    <Link to='/Login'>
        <h3 className='font-dm text-[#000] font-bold text-[16px] justify-center items-center flex pt-1 hover:text-[#fff] duration-500'>Log in</h3>
    </Link>  
    </div>
<div className="">
<h2 className='font-dm text-[#262626] font-bold text-[30px]'>New Customer</h2>
    <h3 className='font-dm text-[#767676] font-normal text-[16px] w-[644px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</h3>

    <div className="h-[40px] w-[130px] bg-black mt-3 mb-20">

        <Link to='/Login'>  
            <h3 className='font-dm text-[#fff] font-bold text-[16px] justify-center items-center flex pt-2'>Continue</h3>
        </Link>  
</div>

</div>

    </div>
  )
}

export default Login