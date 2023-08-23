import React, { useState } from 'react'

function ShowHide() {
    const [show, setShow] = useState(true);

    const handerClick = (event) => {
        setShow(!show)
    }
  return (
    <div>
     
        <button onClick={handerClick}>
         {show ? "Hide Text" : "Show text"}</button>

        {show ? <h2>HIDE ME!!</h2> : ""}
        
    </div>
  )
}

export default ShowHide