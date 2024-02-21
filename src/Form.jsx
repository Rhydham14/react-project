import React, {useState} from "react"

const Form  = () =>{
    const [current, valueCurrent] = useState("");
    const [newValue, updValue] = useState();
  
    const inputValue = (event) =>{
        valueCurrent(event.target.value);
          
    }
    const tab = ()=>{
        updValue(current);
    }       
    
    return(
        <>  
            <span>{newValue}</span>
            <input placeholder="Enter your name " value={current} onChange={inputValue} />
            <button onClick={tab} >Submit</button>
        </>
    );
}

export default Form;