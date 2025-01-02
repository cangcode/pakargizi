import { signOut } from "@/auth"
import Button from "./Button"
 
 const Logout = () => {
   return (
    <form
    action={async () => {
      "use server"
      await signOut()
    }}
  >
    <Button text="Logout"/>
  </form>
   )
 }
 
 export default Logout