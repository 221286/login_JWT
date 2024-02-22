export function handle_click (inputref,index){
    //handling the | in the input field
    console.log(inputref.current)
    inputref.current[index].setSelectionRange(1, 1);
}