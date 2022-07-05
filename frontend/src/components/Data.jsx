

import { createRef } from "react";
import Pdf from "react-to-pdf";

import axios from 'axios'
import { useFetch } from "../hooks/useFetch"
import { useState } from 'react'

export const Data =()=>{
  const ref = createRef()
  const [text,setText] = useState('')
  const [val,setVal] = useState ('')
  const [arr,setArr] = useState ([])
  
  const newval = {val}
  
  const click = (value) =>{
    setArr(prev => [...prev,value])
    console.log(arr)
    setVal('')
  } 
  const form =  {text,jobs: arr}

  

  const submit = (e)=>{
    e.preventDefault()
    axios.post('http://localhost:2000/api/docs',form)
    console.log(form)
  }
  return(
    
    <div >

<Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
      </Pdf>
{/* 
      {data && data.map((d)=>(
        <div key={d._id} >
          <p>{d.text}</p>
        </div>

      ))} */}

      <div  ref={ref}>

      
    <button onClick={()=>click(newval)} >add name </button>

      <form onSubmit={submit}>
      
      <button>send</button>
      <input 
        type="text" 
        onChange={(e)=>setText(e.target.value)} 
        name='first'
        value={text}
        />
        <input 
        type="text" 
        onChange={(e)=>setVal(e.target.value)} 
        name='first'
        value={val}
        />
       
      </form>
      </div>
    </div>
  )
}
