import { Button } from '@mui/material'
import React from 'react'
import {auth} from './firebase.js'
import firebase from "firebase/compat/app"

function SignIn() {

  const signInWithGoogle = () =>{
    const provider = new firebase.auth.GoogleAuthProvider()
    auth.signInWithPopup(provider)
  }

  return (
    <div className='flex items-center justify-center h-screen '>
        <div className="border-2 border-cyan-400 rounded-lg w-60 text-center">
      <Button  onClick={signInWithGoogle}>Sign In With Google</Button>
      </div>
    </div>
  )
}

export default SignIn
