//useState rerenders the entire content
import React from 'react'
import {useState} from 'react'
function Usestate() {
  const myBioData=[
    {
      id:1,name:'Pooja',Age:'36'
    },
    {
      id:2,name:'Punnu',Age:'45'
    }
  ]
    let [myObject,setMyObject]=useState(myBioData);           //as good as myObject=myBioData
    const handleClick=()=>{
      setMyObject([]);
    }
  return (
    <>
    {
    myObject.map((currEle)=>{
      return <h1 key={currEle.id}>Name:{currEle.name} and Age:{currEle.Age}</h1> 
    })
    }
        <button onClick={handleClick}>Click me!</button>
    </>
  )
}

export default Usestate
