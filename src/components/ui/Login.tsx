import React from 'react'
import {signIn} from "@/auth"

export const Login = () => {
  return (
    <form action={async () => {
      "use server"
      await signIn("google")
    }}
    >
      <button className='bg-secGreen border-2 border-secGreen transition-colors hover:bg-white hover:text-secGreen hover:border-secGreen h-fit w-max py-1 px-3 rounded-full text-white font-semibold'>
        Sign With Google
      </button>
    </form>
  )
}
