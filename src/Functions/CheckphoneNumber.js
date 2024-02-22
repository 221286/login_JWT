export function checkPhonenumnr (number,getotppage){
    //regex to check if the number is between 0-9
    // number.length is to check if the number of digits equals to 10 or not
    const numberregex =/^[0-9]+$/;
    
    if(numberregex.test(number) && number.length===10){

        console.log("hi");
        getotppage(true);
    } else {
        alert("Check the input");
    }
}