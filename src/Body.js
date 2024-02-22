import { useState } from "react";
import PhoneNumb from "./Components/PhoneNumb";
import Otpnumberpage from "./Components/Otpnumberpage";


const Body = ()=>{
    const [number,getnumber]=useState("");
    const [otppage,setotppage]=useState(false);
    
    
    
    return (<div className="body">
        {!otppage?(<PhoneNumb number={number} getnumber={getnumber} setotppage={setotppage}/>):(<Otpnumberpage number={number}/>)}
       
    </div>)
}
export default Body;