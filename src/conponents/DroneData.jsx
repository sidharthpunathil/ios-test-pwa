import { auth, db } from "../config/firebase"
import { useState } from "react"
import { getDocs, collection } from "firebase/firestore"

import { useEffect } from "react"

export const DroneData = () => {
   const [area, setArea] = useState(0)
   const [detection, setDetection] = useState(0)
   const droneCollection = collection(db, "dronedata")

   useEffect(() => {
      const getDroneData = async () => {
         // READING THE DATA
         try {
            const data = await getDocs(droneCollection)
            const filteredData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
            console.log()
            setDetection(parseInt(filteredData[0]["detection-times"]))
            setArea(parseInt(filteredData[0]["area"]))

         } catch (err) {
            console.log(err)
         }
      };
      getDroneData();
   }, [])

   return (
      <div>
         <h2>Area: {area}</h2>
         <h2>brown hopper detected in : {detection} locations</h2>
         <h2>pesticides required: {area * 50}</h2>

         **This is just mock data from firebase firestore
      </div>
   );
};



export default DroneData;