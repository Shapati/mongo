
import { useState } from "react"
import {useLoginContext} from '../../hooks/useLoginContext'
export const Login = ()=>{

  const {login,token} = useLoginContext()
  
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')

  const form = {email,password}
  const url = '/api/users/login'
  const submit =(e)=>{
    e.preventDefault()
    login(url,form)
    console.log(token)
  }

  return(
    <div>
      <form onSubmit={submit}>

        <input
        type="email" 
        name="email"
        value={email}
        id="email"
        onChange={(e)=>setEmail(e.target.value)}
         />

         <input 
        type="password" 
        name="password"
        value={password}
        id="password"
        onChange={(e)=>setPassword(e.target.value)}
         />

        <button type="submit">submit</button>
      </form>
    </div>  
  )
}