import React from "react";
import './Option.css';


const Buttonfun = ()=>{
    const Buttonarr = [
        {
            btnLink:"https://www.google.com/",
            btnText:"Quotes"
        },
        {
            btnLink:"https://www.google.com/",
            btnText:"Blogs"
        },
        {
            btnLink:"https://www.google.com/",
            btnText:"News"
        },
       
    ]
    return(
        <>
        <div className="button-container">
        {
            Buttonarr?.map((btnpropt)=>{
                return(
                    <a href={btnpropt.btnLink}>
                    <button className="button">{btnpropt.btnText}</button>
                    </a>
                );
            })
        }
        </div>
        </>
    );
   
}

export default Buttonfun;
