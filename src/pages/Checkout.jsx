import React, { useContext, useEffect, useState } from 'react'
import { Link,  } from 'react-router-dom'
import { getDatabase, ref, onValue } from "firebase/database";
import { useSelector } from 'react-redux';




const Checkout = () => {

  const db = getDatabase();
  let data = useSelector((state)=>state.single.cartItem)
  let [datacheck, setDatacheck] = useState([])

  useEffect(()=>{
    const starCountRef = ref(db, 'user/');
    onValue(starCountRef, (snapshot) => {
      snapshot.forEach((item)=>{
        setDatacheck(item.val());
      })
    });

  },[])


  const {totalPrice, totalQuantity} = data. reduce((acc,item)=>{
    acc.totalPrice += item.price * item.qun
    acc.totalQuantity += item.qun
    return acc;  
  },{totalPrice:0, totalQuantity:0});

console.log(totalPrice);
console.log(totalQuantity);
  return (
    <div className='container mx-auto'>

      <h2>{datacheck.username}</h2>
      <h2>{datacheck.email}</h2>

      <div className="">
       <h2 className='font-dm text-[#262626] font-bold text-[39px]'>Checkout</h2>
       <span className='font-dm text-[#767676] font-bold text-[16px]'><Link>Home</Link> / checkout</span>
       </div>

    <div className="py-10">
      <h2><span className='w-full font-dm text-[#767676] font-normal text-[16px] '>Have a coupon?</span> Click here to enter your code</h2>
    </div>

    <div className="py-5">
      <h2 className='font-dm text-[#262626] font-bold text-[39px]'>Billing Details</h2>
    </div>

    <div className="flex justify-between py-3 w-[70%]">
      <div className="w-[40%]">
        <label className='font-dm text-[#262626] font-bold text-[16px]' htmlFor="">First Name*</label>
        <input className='w-full  font-dm text-[#767676] font-normal text-[14px] py-1' type="text" placeholder='First Name'/>
      </div>
      <div className="w-[40%]">
      <label className='font-dm text-[#262626] font-bold text-[16px]' htmlFor="">Last Name*</label>
        <input className='w-full font-dm text-[#767676] font-normal text-[14px] py-1' type="text" placeholder='Lastst Name'/>
      </div>
    </div>

    <div className="w-[40%] py-3">
      <label className='font-dm text-[#262626] font-bold text-[16px]' htmlFor="">Companye Name (optional)</label>
      <input className='w-full font-dm text-[#767676] font-normal text-[14px] py-1' type="text" placeholder='Company Name'/>
    </div>

    <div className="w-[40%] py-3">
      <label className='font-dm text-[#262626] font-bold text-[16px]' htmlFor="">Country *</label>
      <input className='w-full font-dm text-[#767676] font-normal text-[14px] py-1' type="text" placeholder='Please select'/>
    </div>

    <div className="w-[40%] py-3">
      <label className='font-dm text-[#262626] font-bold text-[16px]' htmlFor="">Street Address *</label>
      <input className='w-full font-dm text-[#767676] font-normal text-[14px] py-2 mb-3' type="text" placeholder='House number and street name'/>
      <input className='w-full py-2 font-dm text-[#767676] font-normal text-[14px]' type="text" placeholder='Apartment, suite, unit etc. (optional)'/>
    </div>

    <div className="w-[40%] py-3">
      <label className='font-dm text-[#262626] font-bold text-[16px]' htmlFor="">Town/City *</label>
      <input className='w-full font-dm text-[#767676] font-normal text-[14px] py-1' type="text" placeholder='Town/City'/>
    </div>

    <div className="w-[40%] py-3">
      <label className='font-dm text-[#262626] font-bold text-[16px]' htmlFor="">County (optional)</label>
      <input className='w-full font-dm text-[#767676] font-normal text-[14px] py-1' type="text" placeholder='County'/>
    </div>

    <div className="w-[40%] py-3">
      <label className='font-dm text-[#262626] font-bold text-[16px]' htmlFor="">Post Code *</label>
      <input className='w-full font-dm text-[#767676] font-normal text-[14px] py-1' type="text" placeholder='Post Code'/>
    </div>

    <div className="w-[40%] py-3">
      <label className='font-dm text-[#262626] font-bold text-[16px]' htmlFor="">Phone *</label>
      <input className='w-full font-dm text-[#767676] font-normal text-[14px] py-1' type="text" placeholder='Phone'/>
    </div>

    <div className="w-[40%] py-3">
      <label className='font-dm text-[#262626] font-bold text-[16px]' htmlFor="">Email Address *</label>
      <input className='w-full font-dm text-[#767676] font-normal text-[14px] py-1' type="text" placeholder='Email'/>
    </div>

    <div className="w-[40%] py-3">
      <h2 className='font-dm text-[#262626] font-bold text-[39px]'>Additional Information</h2>
    <label className='font-dm text-[#262626] font-bold text-[16px]' htmlFor="">Other Notes (optional)</label>
    <input className='w-full py-10 font-dm text-[#767676] font-normal text-[14px] ' type="messeage" placeholder='Notes about your order, e.g. special notes for delivery.'/>
    </div>

    <div className="">
      <h2 className='font-dm text-[#262626] font-bold text-[39px]'>Your Order</h2>
    </div>
    
    <div className="w-[40%] flex justify-between py-5 gap-x-52">
      <label className='w-full font-dm text-[#262626] font-bold text-[16px]' htmlFor="">Product</label>
      <input className='w-full font-dm text-[#767676] font-normal text-[14px] py-1 '  type="text" placeholder='Total'/>
    </div>

    <div className="w-[40%] flex justify-between py-5 gap-x-52">
      <label className='w-full font-dm text-[#262626] font-bold text-[16px]' htmlFor="">Product name x 1</label>
      <input className='w-full font-dm text-[#767676] font-normal text-[14px] py-1 '  type="text" placeholder='389.99 $'/>
    </div>

    <div className="w-[40%] flex justify-between py-5 gap-x-52">
      <label className='w-full font-dm text-[#262626] font-bold text-[16px]' htmlFor="">Subtotal</label>
      <input className='w-full font-dm text-[#767676] font-normal text-[14px] py-1 '  type="text" placeholder='389.99 $'/>
    </div>

    <div className="w-[40%] flex justify-between py-5 gap-x-52">
      <label className='w-full font-dm text-[#262626] font-bold text-[16px]' htmlFor="">Total</label>
      <input className='w-full font-dm text-[#767676] font-normal text-[14px] py-1 '  type="text" placeholder='389.99 $'/>
    </div>




    </div>
  )
}

export default Checkout