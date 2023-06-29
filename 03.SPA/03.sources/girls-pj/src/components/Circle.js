import { useEffect } from "react";
import "../scss/ban.css";

export default function Circle(){
    function test(){
        const circle_wrapper = document.querySelector(".circle_wrapper")
        const circle = document.querySelector(".circle")
        
        circle.classList.add("on")
        

    }

    useEffect(()=>{
        const circle = document.querySelector(".circle").addEventListener("click",test)
        
    },[])

    return(
        <>
            <div className="circle_wrapper">
                <div className="circle"></div>
            </div>
        </>
    )
}
