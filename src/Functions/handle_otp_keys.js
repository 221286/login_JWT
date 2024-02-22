export function handle_otp_keys (inpurRef,index ){
    //check if previous input box exist or not
    if(inpurRef.current[index-1]&& index>0){
        //if all the condition is true then on backsapce set the front index on focus
        inpurRef.current[index-1].focus();
    }
      
}