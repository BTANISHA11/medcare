import { Button } from '@mui/material'
import React from 'react'
import { auth } from './firebase'
import { Link } from "react-router-dom";
function SignOut() {
  return (

      <Button className="log-out" onClick={() => auth.signOut()}>Logout</Button>
    
  )
}

export default SignOut
