import React, { useEffect, useRef } from 'react'
import { checkPhonenumnr } from '../Functions/CheckphoneNumber';

const PhoneNumb = ({number,getnumber,setotppage}) => {
    const numberinput=useRef();
    useEffect(()=>{
        //We'll check if the number input element is present or not
        if(numberinput)
        //With putting focus you can directly start typing in there without finding the input box to click on it
      numberinput.current.focus();
    },[]);
  return (
    <>
       <h1>Enter You Phone Number</h1>
        <form onSubmit={(e)=>{
            
            //To prevent the page form reloading after submit
           e.preventDefault();
           checkPhonenumnr(number,setotppage);
           
           
        }}>
            <input type="text" value={number} onChange={(e)=>{
                getnumber(e.target.value);
            }} ref={numberinput}/>
            <input type="submit"/>
        </form>
    </>
  )
}

export default PhoneNumb
