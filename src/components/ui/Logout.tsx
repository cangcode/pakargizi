import { signOut } from "@/auth"
 
 const Logout = () => {
   return (
    <form
    action={async () => {
      "use server"
      await signOut()
    }}
  >
    <button type="submit">Sign Out</button>
  </form>
   )
 }
 
 export default Logout