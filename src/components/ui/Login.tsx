import React from 'react'
import {signIn} from "@/auth"
import Button from "./Button"


export const Login = () => {
  return (
    <form action={async () => {
      "use server"
      await signIn("google")
    }}
    >
    <Button text="Sign In with Google"/>
    </form>
  )
}
