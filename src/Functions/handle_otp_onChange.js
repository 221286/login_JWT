export function handle_otp_change (e,index,otp,setotp,length,refinput){
const value =e.target.value;
//if the value entered by the user is a not a number then return
if(isNaN(value)) return;
//take the input value from the 4 input field and destructure in in the newotp array
const newotp =[...otp]
// We'll take the last input value at that particular input point
newotp[index]=value.substring(value.length-1,value.length)
setotp(newotp);
//Join all the array into one  and check if all the input field is filled or not if yes than pass the cobined function
const combined_otp =newotp.join("");
if(combined_otp.length===length)
Allotpentered();
//Check if there is value in current input
//Check if there is another input in front 
//Check if the given index is less then the last index
if(value && refinput.current[index+1] && index<length-1)
refinput.current[index+1].focus();
}

function Allotpentered(){
    console.log("All otp enterd");
}