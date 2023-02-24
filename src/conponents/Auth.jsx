import { auth } from "../config/firebase"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { useState } from "react"

export const Auth = () => {

   const signIn = async () => {
      try {
         await createUserWithEmailAndPassword(auth, email, password);
      }
      catch (err) {
         console.log(err)
      }
   }

   const [email, setEmail] = useState("")
   const [password, setPassword] = useState("")

   return (
      <div>
         <input placeholder="emil" onChange={(e) => setEmail(e.target.value)} />
         <input placeholder="password" type="password" onChange={(e) => setPassword(e.target.value)} />
         <button onClick={signIn}>signup</button>
      </div>
   );
};

export default Auth;