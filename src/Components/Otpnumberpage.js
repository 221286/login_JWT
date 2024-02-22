import React, { useEffect, useRef, useState } from 'react'
import { handle_otp_change } from '../Functions/handle_otp_onChange';
import { handle_otp_keys } from '../Functions/handle_otp_keys';
import { handle_click } from '../Functions/handle_click';

const Otpnumberpage = ({number}) => {
    const length=4;
    const inputrefs= useRef([]);
    const [otpinput,setotpinput]=useState(new Array(length).fill(""));
    useEffect(()=>{
        //checkign if there is any input at 0
      if(inputrefs.current[0])
      //setting it on focus so that the user directly start typing instead of clicking that
      inputrefs.current[0].focus();
    },[])
  return (
    <>
      <h1>OTP Sent on: {number}</h1>
      {otpinput.map((value,index)=>(<input key={index} value={value} 
      onChange={(e)=>{handle_otp_change(e,index,otpinput,setotpinput,length,inputrefs)}}
      ref={input=>{inputrefs.current[index]=input}}
      onKeyDown={(e)=>{if(e.key.toLowerCase()==="backspace")
      {handle_otp_keys(inputrefs,index);}}}
      onClick={()=>{handle_click(inputrefs,index)}}/>))}
    </>
  )
}

export default Otpnumberpage
