// Code Keypad Component Here
import React from "react";
function Keypad (){
    function handleEvent(){
        console.log("Entering password...");
    }
    return (
        <div>
            <form>
            <input type="password" onChange={handleEvent}/>
            </form>
        </div>
    )
}

export default Keypad;