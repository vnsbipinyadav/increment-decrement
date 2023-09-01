import React, { useState } from "react";


const Increament =()=>{

    const [num, setNum] = useState(0);
    const [msg, setMsg] = useState(false);

    const incNum =()=>{
        setNum(num + 1);
    };

    const decNum=() =>{
        if (num > 0) {
            
        setNum(num-1)
        } else {
            setNum(0);
            setMsg(true);
            // alert("Sorry, Zero limit Reached");
      }
    };
    return(
<>
    <div className="maindiv"> 
    <div className="centerdiv">
    <h1>{num}</h1>
    <div className="btndiv">
      <button onClick={incNum} className="btn_green">
      +</button>
      <br/>
      <button onClick={decNum} className="btn_red"> -</button>
    </div> 
     {msg ? <p>Negative value</p> : ""}

    </div>
    </div>
</>
    )
}

export default Increament;