import { createContext,useReducer } from "react";
import axios from 'axios'
export const authContext = createContext()

const reducer = (state,action)=>{
  switch(action.type){
    case 'LOGIN_TOKEN':
      return {...state,token: action.payload}
    default:
      return state
}
}



export const Context = ({children})=>{
  const [state,dispatch] = useReducer(reducer ,{ 
    token: null
  }
)


const login = async (url,form)=>{


  const response = await axios.post(url,form)
  localStorage.setItem('token' , response.data.token)
  const token = localStorage.getItem('token')
  dispatch({type: 'LOGIN_TOKEN', payload: token})

}



  return(
  <authContext.Provider value={{...state,login}}>
    {children}
  </authContext.Provider>
  )
}