import { authContext } from "../context/Context";
import { useContext } from "react";

export const useLoginContext = () =>{
  const context = useContext(authContext)

  return context
} 