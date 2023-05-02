//useEffect is used to handle events which are outside the scope of the document, eg:title etc..

import React, { useEffect, useState } from 'react'

const Useeffect = () => {
  const [count,setCount]=useState(0);
  useEffect(()=>
  {
    document.title=count;
  })

  const handleClick=()=>{
    setCount(count+1);
  }

  return (
    <div>
      <p>Notice the title getting updated, after you click the button below</p>
      <button onClick={handleClick}>Click me!</button>
    </div>
  )
}

export default Useeffect